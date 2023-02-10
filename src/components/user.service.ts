import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { combineLatest, BehaviorSubject, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  readonly POST_URL = 'https://jsonplaceholder.typicode.com/posts';
  readonly IMAGES_URL = 'https://jsonplaceholder.typicode.com/photos';
  public userIdStart = 1;

  private userSelectedAction = new BehaviorSubject<number>(this.userIdStart);
  userSelectedAction$ = this.userSelectedAction.asObservable();

  usersHttpHasError$ = new BehaviorSubject(false);
  usersHttpError$ = new BehaviorSubject<any>(null);

  allUsers$ = this.http.get<any>(this.USERS_URL).pipe(
    catchError((err) => {
      this.usersHttpHasError$.next(true);
      this.usersHttpError$.next(err);
      return throwError(() => err)
    })
  );

  allPosts$ = this.http.get<any>(this.POST_URL).pipe(
    catchError((err) => {
      this.handleError(err.message);
      return throwError(() => new Error(err))
    })
  );

  postsByUser$ = combineLatest(
    [this.allPosts$, this.userSelectedAction$]
  ).pipe(
    map(([posts, userId]) => {
      return posts.filter((post: any) => post.userId === userId)
    })
  );

  userAvatar$ = this.userSelectedAction.pipe(
    distinctUntilChanged(),
    switchMap((id) => {
      return this.http.get<any>(this.IMAGES_URL + '/' + id)
    }),
    catchError((err) => {
      this.handleError(err.message);
      return throwError(() => new Error(err))
    })
  )

  constructor(
    private http: HttpClient
  ) { }

  changeSelectedUser(userId: number): void {
    this.userSelectedAction.next(userId);
  }

  handleError(err: any) {
    console.log(err)
  }
}