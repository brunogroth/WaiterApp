import path from 'node:path';

import { Router } from "express";
import multer from 'multer';

import { listCategories } from "./app/useCases/Categories/listCategories";
import { createCategory } from "./app/useCases/Categories/createCategory";
import { listProducts } from "./app/useCases/Products/listProducts";
import { createProduct } from "./app/useCases/Products/createProduct";
import { listProductsByCategory } from './app/useCases/Categories/listProductsByCategory';
import { listOrders } from './app/useCases/Orders/listOrders';
import { createOrder } from './app/useCases/Orders/createOrder';
import { changeOrderStatus } from './app/useCases/Orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/Products/cancelOrder';

export const router = Router();

// Upload de imagens usando Multer
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback){
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

  // Definição das rotas
  // - nome/propriedades

  // ----------- Categories -----------
  // List Categories
  router.get('/categories', listCategories);

  // Create Categories
  router.post('/categories', createCategory);

  // ----------- Products -----------
  // List Products
  router.get('/products', listProducts);

  // Create Product
  router.post('/products', upload.single('image'), createProduct);

  // Get products by category
  router.get('/categories/:categoryId/products', listProductsByCategory);

  // ----------- Orders -----------
  // List orders
  router.get('/orders', listOrders);

  // Create order
  router.post('/orders', createOrder);

  // Change order status
  router.patch('/orders/:orderId', changeOrderStatus);

  // Delete/cancel order
  router.delete('/order/:orderId', cancelOrder);
