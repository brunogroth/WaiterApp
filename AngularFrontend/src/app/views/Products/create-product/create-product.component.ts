import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories!: Category[];
  
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: [
      {
          name: string,
          icon: string,
          _id: string
      }]
  category:string

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get<Category[]>("http://localhost:3001/categories")
    //Executar a requisição
    .subscribe({
      next : (categories) => {
        this.categories = categories;
      }
    });
  }
  

  // CADASTRAR ----------------------- 
  create(): void {
  
    let product: Product = {
      name: this.name,
      description: this.description,
      imagePath: this.imagePath,
      price: this.price,
      ingredients: this.ingredients,
      category: this.category
    }
    //Cadastrar
    this.http.post<Product>("http://localhost:3001/products", product)
      //Executar a requisição
      .subscribe({
        //Caso a requisição for bem sucedida cai no next
        next: (product) => {
          this.router.navigate(["product/list-products"]);
        },
        //Caso dê erro
      });

  }
}
