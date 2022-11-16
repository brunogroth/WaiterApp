import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  name: string = "";
  icon: string = "";
  id!:string;
  constructor(private http : HttpClient,
    private router: Router,
    private url: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(): void{
    let category:Category = {
      name: this.name,
      icon: this.icon
    };

    this.http.post<Category>("http://localhost:3001/categories", category)
    .subscribe({
      next: (category) => {
        this.router.navigate(["category/list-categories"])
      }
    })

  }
}
