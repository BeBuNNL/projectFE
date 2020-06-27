import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderCardComponent } from './user-order-card.component';

describe('UserOrderCardComponent', () => {
  let component: UserOrderCardComponent;
  let fixture: ComponentFixture<UserOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
