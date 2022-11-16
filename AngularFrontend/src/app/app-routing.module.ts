import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './views/Categories/list-categories/list-categories.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CreateCategoryComponent } from './views/Categories/create-category/create-category.component';

const routes: Routes = [
  { path: 'category/list-categories', component: ListCategoriesComponent },
  { path: 'category/create-category', component: CreateCategoryComponent }
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
