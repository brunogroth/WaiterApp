import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products!:Product[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
        //Configurando a requisição para a API    
        this.http.get<Product[]>("http://localhost:3001/products")
        //Executar a requisição
        .subscribe({
          next : (products: Product[]) => {
            this.products = products;
            console.table(products);
          }
        });
  }

}