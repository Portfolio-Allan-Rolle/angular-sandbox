import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-search',
  templateUrl: './rxjs-search.component.html',
  styleUrls: ['./rxjs-search.component.css']
})
export class RxjsSearchComponent implements OnInit {

  public brands = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];

  public term = '';

  constructor() { }

  ngOnInit(): void {     
     
  }

}
