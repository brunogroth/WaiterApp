import { NextFunction, Request, Response } from "express";
import { Category } from "../../models/Category";

export async function listCategories(req:Request, res:Response, next:NextFunction){
  const categories = await Category.find();

  res.json(categories);
}
