import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../user.service';

import { NewAdminRequestComponent } from './new-admin-request.component';

describe('NewAdminRequestComponent', () => {
  let component: NewAdminRequestComponent;
  let fixture: ComponentFixture<NewAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdminRequestComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        UserService
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdminRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
