import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('login service', () => {
  let login: LoginService;
  let httpController: HttpTestingController;
  const input = {
    username: 'admin',
    password: 'admin',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    login = TestBed.inject(LoginService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(login).toBeDefined();
  });

  it('should post to login api with data', () => {
    const response = true;

    login.login(input).then((data) => expect(data).toEqual(response));

    const request = httpController.expectOne('login');
    expect(request.request.method).toEqual('POST');
    request.flush(response);
  });

  it('should receive error when login api fails', () => {
    const errorMessage = 'status 500 error';

    login.login(input).then(
      () => fail('i am intentionally failing here'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(errorMessage, 'message');
      }
    );

    const request = httpController.expectOne('login');
    expect(request.request.method).toEqual('POST');
    request.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });
});
