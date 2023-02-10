import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JsonPlaceholderApiUsersComponent } from './json-placeholder-api-users.component';
import { dummyPhotosAPI, dummyPostsAPI, dummyUsersAPI } from '../models';
import { UserService } from '../user.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('JsonPlaceholderApiUsersComponent', () => {
  let component: JsonPlaceholderApiUsersComponent;
  let fixture: ComponentFixture<JsonPlaceholderApiUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonPlaceholderApiUsersComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
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
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#loader-1'));
    expect(el).toBeTruthy();
  });

  it('should return the user avatar', () => {
    component.userAvatar$ = of(dummyPhotosAPI);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#avatar'));
    expect(el).toBeTruthy();
  });

  it('should return a loader when there are no avatar', () => {
    component.userAvatar$ = of(null);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#loader-2'));
    expect(el).toBeTruthy();
  });

  it('should return the user posts', () => {
    component.postsByUser$ = of(dummyPostsAPI);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#posts'));
    expect(el).toBeTruthy();
  });

  it('should return a loader when there are no posts', () => {
    component.postsByUser$ = of(null);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#loader-3'));
    expect(el).toBeTruthy();
  });
});