import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@Component({
  selector: 'app-rxjs-search',
  templateUrl: './rxjs-search.component.html',
  imports: [CommonModule, FormsModule, SearchPipe],
  styleUrls: ['./rxjs-search.component.css'],
})
export class RxjsSearchComponent implements OnInit {
  public brands = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
  ];

  public term = '';

  constructor() {}

  ngOnInit(): void {}
}
