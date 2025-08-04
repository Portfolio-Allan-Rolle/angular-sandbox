import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  catchError,
  delay,
  distinctUntilChanged,
  map,
  share,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { combineLatest, BehaviorSubject, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  readonly POST_URL = 'https://jsonplaceholder.typicode.com/posts';
  readonly IMAGES_URL = 'https://picsum.photos/id/';
  public userIdStart = 1;

  private userSelectedAction = new BehaviorSubject<number>(this.userIdStart);
  userSelectedAction$ = this.userSelectedAction.asObservable();
  usersHttpError$ = new BehaviorSubject<any>(null);
  postsHttpError$ = new BehaviorSubject<any>(null);

  allUsers$ = this.http.get<any>(this.USERS_URL).pipe(
    catchError((err) => {
      this.usersHttpError$.next(err);
      return throwError(() => err);
    }),
    share()
  );

  allPosts$ = this.http.get<any>(this.POST_URL).pipe(
    catchError((err) => {
      this.postsHttpError$.next(err);
      return throwError(() => err);
    }),
    share()
  );

  postsByUser$ = combineLatest([this.allPosts$, this.userSelectedAction$]).pipe(
    map(([posts, userId]) => {
      return posts.filter((post: any) => post.userId === userId);
    })
  );

  constructor(private http: HttpClient) {}

  changeSelectedUser(userId: number): void {
    this.userSelectedAction.next(userId);
  }
}
