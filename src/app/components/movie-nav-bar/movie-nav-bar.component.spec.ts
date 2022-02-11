import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNavBarComponent } from './movie-nav-bar.component';

describe('MovieNavBarComponent', () => {
  let component: MovieNavBarComponent;
  let fixture: ComponentFixture<MovieNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
