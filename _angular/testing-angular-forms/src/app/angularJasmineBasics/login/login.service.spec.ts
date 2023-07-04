import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';

describe('login service', () => {
  let login: LoginService;
  let httpController: HttpTestingController;

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
});
