import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFormPageComponent } from './users-form-page.component';

describe('UsersFormPageComponent', () => {
  let component: UsersFormPageComponent;
  let fixture: ComponentFixture<UsersFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
