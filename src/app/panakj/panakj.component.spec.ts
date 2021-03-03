import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanakjComponent } from './panakj.component';

describe('PanakjComponent', () => {
  let component: PanakjComponent;
  let fixture: ComponentFixture<PanakjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanakjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanakjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
