import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedrinkComponent } from './createdrink.component';

describe('CreatedrinkComponent', () => {
  let component: CreatedrinkComponent;
  let fixture: ComponentFixture<CreatedrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedrinkComponent]
    });
    fixture = TestBed.createComponent(CreatedrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
