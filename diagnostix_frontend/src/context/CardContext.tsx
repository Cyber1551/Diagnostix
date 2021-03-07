import { message } from "antd";
import { sha256 } from "js-sha256";
import React, { ReactElement, useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { AccountType, CreateAccount, CreateCard, ErrorTypes, GetCardsByEmail, LoginAccount } from '../Api';

export interface ICard {
  title:string;
  description:string;
}
export interface ICardContext {
  cards: ICard[];
  updateCards: (email:string) => void;
  createCard: (title:string, description: string, email:string) => void;
}
const Context = React.createContext<ICardContext>({
  cards: [],
  updateCards: (email:string) =>  () => {},
  createCard: (title:string, description: string, email:string) => () => {}
});

const CardContext = (props: { children: ReactElement[] }) => {
  const [cards, setCards] = useState<ICard[]>([]);

   const updateCards = (email:string) => {
      GetCardsByEmail(email).then((res) => {
        setCards(res);
      })
   }
   const createCard = (title:string, description: string, email:string) => {
    CreateCard({title: title, description: description, email: email}).then((res) => {
      if (res) {
        updateCards(email);
      }
    })
   }
  return (
    <Context.Provider
      value={{
        cards,
        updateCards,
        createCard
      }}
      {...props}
    />
  );

};

export const useCardContext = () => {
  const context = useContext<ICardContext>(Context);
  if (context === undefined) throw new Error("Error Using Context");

  return context;
};
export { Context, CardContext };


