import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from './models/user.service';

@Component({
  selector: 'app-json-placeholder-api-users',
  templateUrl: './json-placeholder-api-users.component.html',
  styleUrls: ['./json-placeholder-api-users.component.css']
})
export class JsonPlaceholderApiUsersComponent implements OnInit {

  users$ = this.userService.allUsers$;
  postsByUser$ = this.userService.postsByUser$;
  userAvatar$ = this.userService.userAvatar$;
  currentUserId$: Observable<number> = of(this.userService.userIdStart);
  usersHttpHasError$ = this.userService.usersHttpHasError$;
  usersHttpError$ = this.userService.usersHttpError$;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.userSelectedAction$.pipe(
      id => this.currentUserId$ = id
    );
  }

  onSelectUser(userId: number) {
    this.userService.changeSelectedUser(userId);
  }

}
