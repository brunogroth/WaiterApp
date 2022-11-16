/* eslint-disable linebreak-style */
import { Product }  from './Product';

export interface Order{
    _id?:string;
    table:string;
    status:string;
    products:[Product];
    createdAt?:Date;

}