import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JsonPlaceholderApiUsersComponent } from './json-placeholder-api-users.component';
import { dummyPhotosAPI, dummyPostsAPI, dummyUsersAPI } from './models/models';
import { UserService } from './models/user.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('JsonPlaceholderApiUsersComponent', () => {
  let component: JsonPlaceholderApiUsersComponent;
  let fixture: ComponentFixture<JsonPlaceholderApiUsersComponent>;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, JsonPlaceholderApiUsersComponent],
    providers: [UserService]
})
    service = TestBed.inject(UserService);
    fixture = TestBed.createComponent(JsonPlaceholderApiUsersComponent);
    component = fixture.componentInstance;
  });

  it('should return a list of users', () => {
    component.users$ = of(dummyUsersAPI);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.list-group'));
    expect(el).toBeTruthy();
  });

  it('should return a loader when there are no users', () => {
    component.users$ = of(null);
    component.usersHttpError$.next(false);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#loader-1'));
    const el2 = fixture.debugElement.query(By.css('#users'));
    expect(el).toBeTruthy();
    expect(el2).toBeFalsy();
  });

  it('should return the user avatar', () => {
    component.userAvatar$ = of(dummyPhotosAPI);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#avatar'));
    expect(el).toBeTruthy();
  });

  it('should return a loader when there are no avatar', () => {
    component.usersHttpError$.next(true);
    component.userAvatar$ = of(false);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#loader-2'));
    const el2 = fixture.debugElement.query(By.css('#avatar'));
    expect(el).toBeTruthy();
    expect(el2).toBeFalsy();
  });

  it('should return the user posts', () => {
    component.postsByUser$ = of(dummyPostsAPI);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#posts'));
    expect(el).toBeTruthy();
  });

  it('should return a loader when there are no posts', () => {
    component.postsByUser$ = of(null);
    component.postsHttpError$.next(false);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#loader-3'));
    const el2 = fixture.debugElement.query(By.css('#posts'));
    expect(el).toBeTruthy();
    expect(el2).toBeFalsy();
  });

  it('invokes the method changeSelectedUser from the service userService', () => {
    const serviceSpy = spyOn(service, 'changeSelectedUser');
    component.users$ = of(dummyUsersAPI);
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#btn'));
    btn.triggerEventHandler('click', {});
    expect(service).toBeTruthy();
    expect(serviceSpy).toHaveBeenCalled();
  });

  it('invokes the method onSelectUser when clicking on a user', () => {
    const componentSpy = spyOn(component, 'onSelectUser');
    component.users$ = of(dummyUsersAPI);
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#btn')).nativeElement;
    btn.click();
    expect(componentSpy).toHaveBeenCalled();
  })
});