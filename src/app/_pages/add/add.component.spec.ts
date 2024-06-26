import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMember } from './add.component';

describe('FormComponent', () => {
  let component: AddMember;
  let fixture: ComponentFixture<AddMember>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMember]
    });
    fixture = TestBed.createComponent(AddMember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
