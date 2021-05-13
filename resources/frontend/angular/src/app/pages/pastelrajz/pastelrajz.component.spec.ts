import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelrajzComponent } from './pastelrajz.component';

describe('PastelrajzComponent', () => {
  let component: PastelrajzComponent;
  let fixture: ComponentFixture<PastelrajzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastelrajzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastelrajzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
