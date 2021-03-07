import axios from "axios"
import { ICard } from "./context/CardContext";


export enum AccountType {
    Patient = 0,
    Doctor = 1
}
export interface ICreateAccount {
    encryptedPassword:string;
    accountType:AccountType, 
    firstName: string;
    lastName: string;
    email: string
}
export enum ErrorTypes {
    Success = 0,
    Error = 1
}
export interface ICreateAccountResult {
    errorTypes: ErrorTypes;
}
export interface ILoginAccount {
    encryptedPassword:string;
    email: string
}
export interface ILoginAccountResult {
    email: string;
    firstName: string;
    lastName: string;
    accountType: number;
    errorTypes: ErrorTypes;
}

export interface ICreateCard {
    title:string;
    description:string;
    email:string;
}
export const CreateAccount = async (user:ICreateAccount): Promise<ICreateAccountResult> => {
    const response = await axios.post("https://localhost:5001/api/Account/RegisterAccount", user)
    return Promise.resolve(response.data);
}
export const LoginAccount = async (user:ILoginAccount): Promise<ILoginAccountResult> => {
    const response = await axios.post("https://localhost:5001/api/Account/LoginAccount", user)
    return Promise.resolve(response.data);
}
export const GetCardsByEmail = async (email:string): Promise<ICard[]> => {
    const response = await axios.get(`https://localhost:5001/api/Account/GetCardsByEmail?email=${email}`);
    return Promise.resolve(response.data)
}

export const CreateCard = async (cc: ICreateCard): Promise<boolean> => {
    const response = await axios.post(`https://localhost:5001/api/Account/CreateCard`, cc);
    return Promise.resolve(response.data)
}