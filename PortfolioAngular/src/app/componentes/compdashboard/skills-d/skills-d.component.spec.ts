import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDComponent } from './skills-d.component';

describe('SkillsDComponent', () => {
  let component: SkillsDComponent;
  let fixture: ComponentFixture<SkillsDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
