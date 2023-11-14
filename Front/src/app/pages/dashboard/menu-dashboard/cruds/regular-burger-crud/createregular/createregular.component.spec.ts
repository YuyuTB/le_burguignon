import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateregularComponent } from './createregular.component';

describe('CreateregularComponent', () => {
  let component: CreateregularComponent;
  let fixture: ComponentFixture<CreateregularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateregularComponent]
    });
    fixture = TestBed.createComponent(CreateregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
