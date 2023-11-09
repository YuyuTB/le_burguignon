import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackCrudComponent } from './snack-crud.component';

describe('SnackCrudComponent', () => {
  let component: SnackCrudComponent;
  let fixture: ComponentFixture<SnackCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackCrudComponent]
    });
    fixture = TestBed.createComponent(SnackCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
