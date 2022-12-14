import { Request, Response } from "express";
import { Order } from "../../models/Order";
import { Product } from "../../models/Product";

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({ table, products });
    res.status(201).json(order);
  } catch {
    res.status(500);
  }
}
