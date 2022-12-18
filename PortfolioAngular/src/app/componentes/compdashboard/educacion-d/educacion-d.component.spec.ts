import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionDComponent } from './educacion-d.component';

describe('EducacionDComponent', () => {
  let component: EducacionDComponent;
  let fixture: ComponentFixture<EducacionDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
