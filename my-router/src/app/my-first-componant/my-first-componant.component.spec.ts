import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponantComponent } from './my-first-componant.component';

describe('MyFirstComponantComponent', () => {
  let component: MyFirstComponantComponent;
  let fixture: ComponentFixture<MyFirstComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
