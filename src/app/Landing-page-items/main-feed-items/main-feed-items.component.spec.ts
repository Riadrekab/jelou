import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeedItemsComponent } from './main-feed-items.component';

describe('MainFeedItemsComponent', () => {
  let component: MainFeedItemsComponent;
  let fixture: ComponentFixture<MainFeedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFeedItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainFeedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
