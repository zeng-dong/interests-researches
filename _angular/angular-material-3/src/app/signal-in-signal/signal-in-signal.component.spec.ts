import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInSignalComponent } from './signal-in-signal.component';

describe('SignalInSignalComponent', () => {
  let component: SignalInSignalComponent;
  let fixture: ComponentFixture<SignalInSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalInSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
