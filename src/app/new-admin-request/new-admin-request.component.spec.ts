import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminRequestComponent } from './new-admin-request.component';

describe('NewAdminRequestComponent', () => {
  let component: NewAdminRequestComponent;
  let fixture: ComponentFixture<NewAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdminRequestComponent ]
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
