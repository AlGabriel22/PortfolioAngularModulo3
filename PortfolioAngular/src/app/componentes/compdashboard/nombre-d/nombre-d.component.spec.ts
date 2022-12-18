import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreDComponent } from './nombre-d.component';

describe('NombreDComponent', () => {
  let component: NombreDComponent;
  let fixture: ComponentFixture<NombreDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
