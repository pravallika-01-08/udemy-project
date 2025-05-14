import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachOnUdemyComponent } from './teach-on-udemy.component';

describe('TeachOnUdemyComponent', () => {
  let component: TeachOnUdemyComponent;
  let fixture: ComponentFixture<TeachOnUdemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachOnUdemyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachOnUdemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
