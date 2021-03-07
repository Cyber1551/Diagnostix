import { message } from "antd";
import { sha256 } from "js-sha256";
import React, { ReactElement, useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { AccountType, CreateAccount, ErrorTypes, LoginAccount } from '../Api';

export interface IUser {
  email: string;
  fname: string;
  lname: string;
  accountType: number;
}
export interface IAccount {
  login: (username: string, password: string, onSuccess: any, onFailure: any) => void;
  register: (email: string, password: string, fname: string, lname: string, accountType: AccountType, onSuccess: Function, onFailure: Function) => void;
  user: IUser | null;
  isLoggedIn: () => boolean;
  logout: () => void;
}
const Context = React.createContext<IAccount>({
  login: (username: string, password: string, onSuccess: any, onFailure: any) => { },
  register: (email: string, password: string, fname: string, lname: string, accountType: AccountType, onSuccess: Function, onFailure: Function) => { },
  user: null,
  isLoggedIn: () => false,
  logout: () => { }
});

const UserContext = (props: { children: ReactElement }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const history = useHistory();
  
  const isLoggedIn = (): boolean => {
    return user !== null;
  }

  const logout = () => {
    if (user) {
      message.success("Logged out!");
      setUser(null);
    }
  };
  const register = (email: string, password: string, fname: string, lname: string, accountType: AccountType, onSuccess: Function, onFailure: Function) => {
    var encryptedPassword = sha256(password);
    CreateAccount({
      email: email,
      encryptedPassword: encryptedPassword,
      firstName: fname,
      lastName: lname,
      accountType: accountType
    }).then((res) => {
      if (res.errorTypes == ErrorTypes.Success) {
        message.success("Success! You can now login.");
      } else {
        message.error("Email already exists.");
      }
    })
  }
  const login = (
    email: string,
    password: string,
    onSuccess: Function,
    onFailure: Function
  ) => {
    var encryptedPassword = sha256(password);
    LoginAccount({
      email: email,
      encryptedPassword: encryptedPassword,
    }).then((res) => {
      console.log(res);
      if (res.errorTypes == ErrorTypes.Success) {
        message.success("Success!");
        setUser({
          email: res.email,
          fname: res.firstName,
          lname: res.lastName, 
          accountType: res.accountType
        });
        history.push("/");
      } else {
        message.error("Error!");
      }
    })
  }

  return (
    <Context.Provider
      value={{
        login,
        isLoggedIn,
        register,
        logout,
        user,
      }}
      {...props}
    />
  );

};

export const useUserContext = () => {
  const context = useContext<IAccount>(Context);
  if (context === undefined) throw new Error("Error Using Context");

  return context;
};
export { Context, UserContext };


