import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  // this works as traditional async await
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ HomeComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // this won't work because the test code will run before the async code is finished
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HomeComponent],
  //   })
  //     .compileComponents()
  //     .then(() => {
  //       fixture = TestBed.createComponent(HomeComponent);
  //       component = fixture.componentInstance;
  //       fixture.detectChanges();
  //     });
  // });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct content in p tag', () => {
    let ps = el.queryAll(By.css('p'));
    expect(ps[0].nativeElement.textContent).toBe('home works!');
  });

  it('should have button disabled', () => {
    let buttons = el.queryAll(By.css('.btn'));
    expect(buttons[0].nativeElement.disabled).toBeTrue();
    expect(buttons[0].nativeElement.textContent).toBe('Submit');
  });

  it('should have image', () => {
    let images = el.queryAll(By.css('img  '));
    expect(images[0].nativeElement.src).toBe('https://imagesrc.com/123');
  });

  it('should have a title', () => {
    component.title = 'angular unit testing!!';
    fixture.detectChanges();

    let texts = el.queryAll(By.css('.title'));
    expect(texts[0].nativeElement.textContent).toBe('angular unit testing!!');
  });

  it('should have a for test div', () => {
    const div = el.nativeElement.querySelector('div[test-id="abc"]');
    expect(div.textContent).toBe('For test');
  });

  it('should render a button with text subscribe', () => {
    const buttons = el.queryAll(By.css('.subscribe'));
    component.btnText = 'Subscribe';
    component.isSubscribed = false;
    fixture.detectChanges();

    expect(buttons[0].nativeElement.textContent).toContain('Subscribe');
    expect(buttons[0].nativeElement.disabled).toBeFalse();
  });

  it('should render a button with text subscribed and button disabled after click', () => {
    const buttons = el.queryAll(By.css('.subscribe'));
    component.btnText = 'Subscribe';
    component.isSubscribed = false;

    const button = buttons[0];
    button.nativeElement.click();

    fixture.detectChanges();

    expect(button.nativeElement.textContent).toContain('Subscribed');
    expect(button.nativeElement.disabled).toBeTrue();
  });
});
