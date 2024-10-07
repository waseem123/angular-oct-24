import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentscardComponent } from './studentscard.component';

describe('StudentscardComponent', () => {
  let component: StudentscardComponent;
  let fixture: ComponentFixture<StudentscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentscardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
