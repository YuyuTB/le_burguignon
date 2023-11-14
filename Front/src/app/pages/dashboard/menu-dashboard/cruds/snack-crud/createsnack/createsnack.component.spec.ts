import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesnackComponent } from './createsnack.component';

describe('CreatesnackComponent', () => {
  let component: CreatesnackComponent;
  let fixture: ComponentFixture<CreatesnackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatesnackComponent]
    });
    fixture = TestBed.createComponent(CreatesnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
