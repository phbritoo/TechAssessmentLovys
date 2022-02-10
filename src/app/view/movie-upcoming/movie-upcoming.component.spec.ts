import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpcomingComponent } from './movie-upcoming.component';

describe('MovieUpcomingComponent', () => {
  let component: MovieUpcomingComponent;
  let fixture: ComponentFixture<MovieUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
