import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertCrudComponent } from './dessert-crud.component';

describe('DessertCrudComponent', () => {
  let component: DessertCrudComponent;
  let fixture: ComponentFixture<DessertCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertCrudComponent]
    });
    fixture = TestBed.createComponent(DessertCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
