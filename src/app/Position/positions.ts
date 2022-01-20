import { IPhone } from "../SmartPhone/phones";

export interface IPosition{
    id:number;
    latitude:number;
    longitude:number;
    date:Date;
    phone:IPhone;
}