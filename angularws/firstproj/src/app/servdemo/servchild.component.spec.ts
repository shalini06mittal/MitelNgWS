import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServchildComponent } from './servchild.component';

describe('ServchildComponent', () => {
  let component: ServchildComponent;
  let fixture: ComponentFixture<ServchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServchildComponent]
    });
    fixture = TestBed.createComponent(ServchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
