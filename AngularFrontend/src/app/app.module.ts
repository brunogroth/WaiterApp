import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './views/Categories/list-categories/list-categories.component';
import { CreateCategoryComponent } from './views/Categories/create-category/create-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateOrderComponent } from './views/Orders/create-order/create-order.component';
import { ListOrdersComponent } from './views/Orders/list-orders/list-orders.component';
import { ListProductComponent } from './views/Products/list-products/list-product.component';
import { CreateProductComponent } from './views/Products/create-product/create-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    CreateCategoryComponent,
    CreateOrderComponent,
    ListOrdersComponent,
    ListProductComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
