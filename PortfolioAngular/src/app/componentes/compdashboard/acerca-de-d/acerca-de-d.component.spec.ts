import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeDComponent } from './acerca-de-d.component';

describe('AcercaDeDComponent', () => {
  let component: AcercaDeDComponent;
  let fixture: ComponentFixture<AcercaDeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
