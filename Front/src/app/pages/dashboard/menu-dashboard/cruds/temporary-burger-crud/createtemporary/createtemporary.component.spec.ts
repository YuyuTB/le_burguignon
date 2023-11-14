import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetemporaryComponent } from './createtemporary.component';

describe('CreatetemporaryComponent', () => {
  let component: CreatetemporaryComponent;
  let fixture: ComponentFixture<CreatetemporaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatetemporaryComponent]
    });
    fixture = TestBed.createComponent(CreatetemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
