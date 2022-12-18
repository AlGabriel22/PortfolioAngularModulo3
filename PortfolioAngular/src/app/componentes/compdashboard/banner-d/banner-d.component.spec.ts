import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDComponent } from './banner-d.component';

describe('BannerDComponent', () => {
  let component: BannerDComponent;
  let fixture: ComponentFixture<BannerDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
