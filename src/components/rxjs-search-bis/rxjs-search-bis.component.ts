import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { Observable, combineLatest, map, of, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-search-bis',
  templateUrl: './rxjs-search-bis.component.html',
  styleUrls: ['./rxjs-search-bis.component.css']
})
export class RxjsSearchBisComponent implements OnInit {
  
  public search = new FormControl('', {nonNullable: true});
  
  public data$!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.data$ = this.getData();
  }

  getData(): Observable<string[]> {
    const searchTerm$ = this.search.valueChanges.pipe(startWith(''));
    const brands$ = of([
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
    ]);
    return combineLatest(([brands$, searchTerm$]))
            .pipe(
              tap(console.log),
              map(([data, term]) => data.filter((el:string) => el.toLowerCase().includes(term)))
            )
  }

}
