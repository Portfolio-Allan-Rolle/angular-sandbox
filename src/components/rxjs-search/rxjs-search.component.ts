import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, concatMap, filter, forkJoin, from, map, mergeMap, of, startWith, tap, toArray, withLatestFrom } from 'rxjs';

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
