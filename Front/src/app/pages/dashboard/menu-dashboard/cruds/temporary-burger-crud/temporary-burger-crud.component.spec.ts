import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryBurgerCrudComponent } from './temporary-burger-crud.component';

describe('TemporaryBurgerCrudComponent', () => {
  let component: TemporaryBurgerCrudComponent;
  let fixture: ComponentFixture<TemporaryBurgerCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemporaryBurgerCrudComponent]
    });
    fixture = TestBed.createComponent(TemporaryBurgerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
