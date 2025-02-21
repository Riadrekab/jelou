import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFormBodyComponent } from './users-form-body.component';

describe('UsersFormBodyComponent', () => {
  let component: UsersFormBodyComponent;
  let fixture: ComponentFixture<UsersFormBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersFormBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
