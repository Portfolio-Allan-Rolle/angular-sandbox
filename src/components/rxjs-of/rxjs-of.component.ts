import { Component, OnInit } from '@angular/core';
import {
  of,
  from,
  EMPTY,
  NEVER,
  throwError,
  take,
  takeWhile,
  timer,
  interval,
  concatMap,
  Observable,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-of',
  templateUrl: './rxjs-of.component.html',
  styleUrls: ['./rxjs-of.component.css'],
})
export class RxjsOfComponent implements OnInit {
  private source$ = from([1, 2, 3, 4, 5, 6]);
  private counter$ = interval(1000);

  constructor() {}

  ngOnInit(): void {
    // Create a cold and a hot observable

    const rollDiceCold = (): Observable<number> => {
      return new Observable((subscriber) => {
        const diceNumber = Math.floor(Math.random() * 6) + 1; // inside
        subscriber.next(diceNumber);
      });
    };

    const rollDiceHot = (): Observable<number> => {
      const diceNumber = Math.floor(Math.random() * 6) + 1; // outside
      return new Observable((subscriber) => {
        subscriber.next(diceNumber);
      });
    };

    const rollDice1$ = rollDiceCold();
    rollDice1$.subscribe(console.log);
    rollDice1$.subscribe(console.log);
    rollDice1$.subscribe(console.log);
    rollDice1$.subscribe(console.log);

    const rollDice2$ = rollDiceHot();
    rollDice2$.subscribe(console.log);
    rollDice2$.subscribe(console.log);
    rollDice2$.subscribe(console.log);
    rollDice2$.subscribe(console.log);
  }
}
