import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('HomeComponent', () => {
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
});
