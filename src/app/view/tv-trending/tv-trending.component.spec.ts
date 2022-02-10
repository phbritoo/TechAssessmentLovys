import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTrendingComponent } from './tv-trending.component';

describe('TvTrendingComponent', () => {
  let component: TvTrendingComponent;
  let fixture: ComponentFixture<TvTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
