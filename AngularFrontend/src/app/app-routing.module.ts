import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './views/Categories/list-categories/list-categories.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CreateCategoryComponent } from './views/Categories/create-category/create-category.component';
import { CreateOrderComponent } from './views/Orders/create-order/create-order.component';
import { ListOrdersComponent } from './views/Orders/list-orders/list-orders.component';
import { ListProductComponent } from './views/Products/list-products/list-product.component';
import { CreateProductComponent } from './views/Products/create-product/create-product.component';

const routes: Routes = [
  { path: 'category/list-categories', component: ListCategoriesComponent },
  { path: 'category/create-category', component: CreateCategoryComponent },
  { path: 'order/list-orders', component: ListOrdersComponent },
  { path: 'order/create-order', component: CreateOrderComponent },
  { path: 'product/list-products', component: ListProductComponent },
  { path: 'product/create-product', component: CreateProductComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
