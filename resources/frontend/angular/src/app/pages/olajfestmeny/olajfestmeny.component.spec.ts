import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlajfestmenyComponent } from './olajfestmeny.component';

describe('OlajfestmenyComponent', () => {
  let component: OlajfestmenyComponent;
  let fixture: ComponentFixture<OlajfestmenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlajfestmenyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlajfestmenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
