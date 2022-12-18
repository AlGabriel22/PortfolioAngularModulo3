import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarExperienciaModalComponent } from './borrar-experiencia-modal.component';

describe('BorrarExperienciaModalComponent', () => {
  let component: BorrarExperienciaModalComponent;
  let fixture: ComponentFixture<BorrarExperienciaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarExperienciaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarExperienciaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
