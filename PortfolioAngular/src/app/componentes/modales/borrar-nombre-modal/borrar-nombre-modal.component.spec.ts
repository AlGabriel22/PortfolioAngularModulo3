import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarNombreModalComponent } from './borrar-nombre-modal.component';

describe('BorrarNombreModalComponent', () => {
  let component: BorrarNombreModalComponent;
  let fixture: ComponentFixture<BorrarNombreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarNombreModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarNombreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
