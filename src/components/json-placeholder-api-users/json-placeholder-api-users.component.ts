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
  usersHttpError$ = this.userService.usersHttpError$;
  postsByUser$ = this.userService.postsByUser$;
  postsHttpError$ = this.userService.postsHttpError$;
  userAvatar$ = this.userService.userAvatar$;
  avatarHttpError$ = this.userService.avatarHttpError$;
  currentUserId$: Observable<number> = of(this.userService.userIdStart);

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
