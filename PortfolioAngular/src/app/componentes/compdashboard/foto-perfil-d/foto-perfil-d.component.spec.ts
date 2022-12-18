import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPerfilDComponent } from './foto-perfil-d.component';

describe('FotoPerfilDComponent', () => {
  let component: FotoPerfilDComponent;
  let fixture: ComponentFixture<FotoPerfilDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoPerfilDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoPerfilDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
