import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTrendingComponent } from './movie-trending.component';

describe('MovieTrendingComponent', () => {
  let component: MovieTrendingComponent;
  let fixture: ComponentFixture<MovieTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
