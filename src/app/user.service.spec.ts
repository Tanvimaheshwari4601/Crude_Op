import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { UserService } from './user.service';
import { of } from 'rxjs';
import { userData } from './test-utils';
import { Component } from '@angular/core';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  // it('Create an User on Service method', () => {
  //   Component.user = [
  //     userData('Tanvi', 'PENDING'),
  //     userData('Raj', 'APPROVED'),
  //     userData('Patel', 'REJECTED')
  //   ];
  //   const service: UserService = TestBed.get(UserService);
  //   let userServiceMock = spyOn(service, 'createUser');

  //   service.createUser({}).subscribe((data) => {
  //     console.log("called")
  //     expect(data).toEqual(of(userData));
  //   }); 
  //   expect(service.createUser).toHaveBeenCalled();
  
  // });
});
