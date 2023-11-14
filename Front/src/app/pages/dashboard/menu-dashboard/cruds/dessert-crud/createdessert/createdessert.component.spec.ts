import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedessertComponent } from './createdessert.component';

describe('CreatedessertComponent', () => {
  let component: CreatedessertComponent;
  let fixture: ComponentFixture<CreatedessertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedessertComponent]
    });
    fixture = TestBed.createComponent(CreatedessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
