import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAcercadeModalComponent } from './borrar-acercade-modal.component';

describe('BorrarAcercadeModalComponent', () => {
  let component: BorrarAcercadeModalComponent;
  let fixture: ComponentFixture<BorrarAcercadeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarAcercadeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarAcercadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
