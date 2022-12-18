import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDComponent } from './experiencia-d.component';

describe('ExperienciaDComponent', () => {
  let component: ExperienciaDComponent;
  let fixture: ComponentFixture<ExperienciaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
