import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  table: string;
  status: string;
  products: [Product];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // CADASTRAR ----------------------- 
  create(): void {
  
    let order: Order = {
      table: this.table,
      status: this.status,
      products: this.products
    }
    //Cadastrar
    this.http.post<Order>("http://localhost:3001/orders", order)
      //Executar a requisição
      .subscribe({
        //Caso a requisição for bem sucedida cai no next
        next: (order) => {
          this.router.navigate(["order/list-orders"]);
        },
        //Caso dê erro
      });

  }
}
