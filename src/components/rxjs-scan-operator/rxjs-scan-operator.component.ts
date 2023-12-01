import { Component, OnInit } from '@angular/core';
import { scan, of, from, concatMap, tap, toArray, map, takeLast, last, mergeAll, combineLatest, switchMap, reduce } from 'rxjs';

@Component({
  selector: 'app-rxjs-scan-operator',
  templateUrl: './rxjs-scan-operator.component.html',
  styleUrls: ['./rxjs-scan-operator.component.css']
})
export class RxjsScanOperatorComponent implements OnInit {

  private source$ = of(3,4);
  private products$ = of([{id: 2, quantity: 0},{id: 3, quantity: 1},{id: 4, quantity: 4}])

  constructor() { }

  ngOnInit(): void {
  //  this.source$.pipe(
  //   concatMap(id => {
  //     return this.products$.pipe(
  //       map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product),
  //       toArray() 
  //     )
  //   })
  //  ).subscribe(console.log)

  }

}
