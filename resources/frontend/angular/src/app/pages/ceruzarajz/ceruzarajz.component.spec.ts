import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeruzarajzComponent } from './ceruzarajz.component';

describe('CeruzarajzComponent', () => {
  let component: CeruzarajzComponent;
  let fixture: ComponentFixture<CeruzarajzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeruzarajzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeruzarajzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
