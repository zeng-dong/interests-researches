import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material/material.module';
import { FormService } from '../../services/form/form.service';

import { FormComponent } from './form.component';

const mockFormService = new FormService();

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [FormComponent],
      providers: [
        MatSnackBar,
        { provide: FormService, useValue: mockFormService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reuqire an email', () => {
    const email = component.form.get('email');
    email?.patchValue(null);

    fixture.detectChanges();

    expect(email?.errors?.['required']).toBeTruthy();

    //expect(email?.valid).toBeFalse();
  });

  it('should require a valid email', () => {
    const email = component.form.get('email');
    email?.patchValue('not an email');

    fixture.detectChanges();

    // email.errors is undefined now why?
    //expect(email?.errors?.['required']).toBeFalse();

    expect(email?.valid).toBeFalse();
  });
});
