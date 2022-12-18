import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreModalComponent } from './nombre-modal.component';

describe('NombreModalComponent', () => {
  let component: NombreModalComponent;
  let fixture: ComponentFixture<NombreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
