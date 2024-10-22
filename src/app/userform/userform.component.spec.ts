import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformComponent } from './userform.component';

describe('UserformComponent', () => {
  let component: UserformComponent;
  let fixture: ComponentFixture<UserformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
