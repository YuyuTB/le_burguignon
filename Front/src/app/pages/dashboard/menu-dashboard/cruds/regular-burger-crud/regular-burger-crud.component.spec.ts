import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularBurgerCrudComponent } from './regular-burger-crud.component';

describe('RegularBurgerCrudComponent', () => {
  let component: RegularBurgerCrudComponent;
  let fixture: ComponentFixture<RegularBurgerCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularBurgerCrudComponent]
    });
    fixture = TestBed.createComponent(RegularBurgerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
