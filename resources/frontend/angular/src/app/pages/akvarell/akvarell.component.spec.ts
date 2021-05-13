import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkvarellComponent } from './akvarell.component';

describe('AkvarellComponent', () => {
  let component: AkvarellComponent;
  let fixture: ComponentFixture<AkvarellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkvarellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkvarellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
