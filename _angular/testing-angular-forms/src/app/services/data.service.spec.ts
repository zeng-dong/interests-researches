import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DataService } from './data.service';
import { USERS } from '../mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(4);

      const user = users.find((user: any) => user.id === 2);
      expect(user.name).toBe('David');
    });

    const req = testingController.expectOne('api/users');
    expect(req.request.method).toBe('GET');
    req.flush(Object.values(USERS));
    //testingController.verify();

  });

  it('should get user by id', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('John');
    });

    const req = testingController.expectOne('api/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(USERS[1]);
    //testingController.verify();
  });

  afterEach(() => {
    testingController.verify();
  });
});
