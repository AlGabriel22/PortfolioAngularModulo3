import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticasDComponent } from './practicas-d.component';

describe('PracticasDComponent', () => {
  let component: PracticasDComponent;
  let fixture: ComponentFixture<PracticasDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticasDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticasDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
