import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyleComponent } from './fyle.component';

describe('FyleComponent', () => {
  let component: FyleComponent;
  let fixture: ComponentFixture<FyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
