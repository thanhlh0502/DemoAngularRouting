import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserisComponent } from './useris.component';

describe('UserisComponent', () => {
  let component: UserisComponent;
  let fixture: ComponentFixture<UserisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
