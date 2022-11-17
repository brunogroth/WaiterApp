import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders!:Order[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
        //Configurando a requisição para a API    
        this.http.get<Order[]>("http://localhost:3001/orders")
        //Executar a requisição
        .subscribe({
          next : (orders: Order[]) => {
            this.orders = orders;
            console.table(orders);
          }
        });
  }

}
