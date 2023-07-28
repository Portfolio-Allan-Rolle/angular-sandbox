import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { IUser, dummyUsersAPI, IPost, dummyPostsAPI, IPhoto, dummyPhotosAPI } from './models';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify()
  })

  it('retrieve users from the API via GET', () => {
    const dummyUsers: IUser[] = dummyUsersAPI;
    let usersDataResponse: IUser[] | undefined;

    service.allUsers$.subscribe(users => {
      usersDataResponse = users
    });

    const request = controller.expectOne(service.USERS_URL);

    request.flush(dummyUsers);

    expect(request.request.method).toBe('GET');
    expect(usersDataResponse?.length).toBe(2);
    expect(usersDataResponse).toEqual(dummyUsers)
  });

  it('retrieve posts from the API via GET', () => {
    const dummyPosts: IPost[] = dummyPostsAPI;
    let dummyPhotosResponse: IPost[] | undefined;

    service.allPosts$.subscribe(posts => {
      dummyPhotosResponse = posts;
    });

    const request = controller.expectOne(service.POST_URL);

    request.flush(dummyPosts);

    expect(request.request.method).toBe('GET');
    expect(dummyPhotosResponse?.length).toBe(2);
    expect(dummyPhotosResponse).toEqual(dummyPosts);
  });


  it('retrieve user avatar from the API via GET', () => {
    const dummyPhotos: IPhoto[] = dummyPhotosAPI;
    const userId = 3;
    let dummyAvatarResponse: IPhoto[] | undefined;

    service.userAvatar$.subscribe(avatar => {
      dummyAvatarResponse = avatar
    });

    const request = controller.expectOne(service.IMAGES_URL + '/1');

    request.flush(dummyPhotos);

    expect(request.request.method).toBe('GET');
    expect(dummyAvatarResponse?.length).toBe(1);
    expect(dummyAvatarResponse).toEqual(dummyPhotos);
    if (dummyAvatarResponse) {
      expect(dummyAvatarResponse[0].id).toBe(userId)
    }
  });

  it('retrieve post by user from the API via GET', () => {
    const dummyPosts: IPost[] = dummyPostsAPI;
    const userId = 3; // Comment tester l'id ???
    let dummyPostsResponse: IPost[] | undefined;

    service.allPosts$ = of(dummyPostsAPI);
    service.userSelectedAction$ = of(2);

    service.postsByUser$.subscribe(posts => {
      dummyPostsResponse = posts
    });

    const request = controller.expectOne(service.POST_URL);

    request.flush(dummyPostsAPI);

    expect(request.request.method).toBe('GET');
    expect(dummyPostsResponse?.length).toBe(2);
    expect(dummyPostsResponse).toEqual(dummyPosts);
  });

  it('returns an error message when USERS API fail', () => {
    service.allUsers$.subscribe({
      next: () => fail('fail to retrieve users'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      },
      complete: () => fail('fail to complete')
    })

    const request = controller.expectOne(service.USERS_URL);

    expect(request.request.method).toEqual('GET');

    request.flush('Retrieve Users failed', {
      status: 500,
      statusText: 'Internal Server Error'
    })
  });

  it('returns an error message when POST API fail', () => {
    service.allPosts$.subscribe({
      next: () => fail('fail to retrieve users'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      },
      complete: () => fail('fail to complete')
    })

    const request = controller.expectOne(service.POST_URL);

    expect(request.request.method).toEqual('GET');

    request.flush('Retrieve Users failed', {
      status: 500,
      statusText: 'Internal Server Error'
    })
  });

  it('returns an error message when IMAGES API fail', () => {
    service.userAvatar$.subscribe({
      next: () => fail('fail to retrieve users'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      },
      complete: () => fail('fail to complete')
    })

    const request = controller.expectOne(service.IMAGES_URL + '/1');

    expect(request.request.method).toEqual('GET');

    request.flush('Retrieve Users failed', {
      status: 500,
      statusText: 'Internal Server Error'
    })
  });

  it('returns the correct id when selecting a user', () => {
    service.changeSelectedUser(4);
    let result = 1;
    service.userSelectedAction$.subscribe(
      id => result = id
    )
    expect(result).toEqual(4)
  });

});
