import { Component, OnInit } from '@angular/core';
import { catchError, concatMap, exhaustMap, from, mergeMap, of, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs-higher-order-mapping-operators',
  templateUrl: './rxjs-higher-order-mapping-operators.component.html',
  styleUrls: ['./rxjs-higher-order-mapping-operators.component.css']
})
export class RxjsHigherOrderMappingOperatorsComponent implements OnInit {

  private url = 'https://jsonplaceholder.typicode.com/users/';
  private source$ = from([1, 2, 3, 4, 5]);

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.source$.pipe(
      switchMap(id => this.httpCall(id))
    ).subscribe({
      next: v => console.log(v),
      error: err => console.error('ERR: ', err),
      complete: () => console.log('complete')
    })
  }

  private httpCall(id:number) {
    return this.http.get<any>(this.url + id)
            .pipe(catchError(err => {
              console.error(err)
              return throwError(() => err)
            }))
  }

}
