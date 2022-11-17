/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories!: Category[];
  
  constructor( private http: HttpClient ) {}

  ngOnInit(): void {
    //Configurando a requisição para a API    
    this.http.get<Category[]>("http://localhost:3001/categories")
    //Executar a requisição
    .subscribe({
      next : (categories) => {
        this.categories = categories;
        console.table(categories);
      }
    });
  }
}