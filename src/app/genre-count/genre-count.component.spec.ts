import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCountComponent } from './genre-count.component';

describe('GenreCountComponent', () => {
  let component: GenreCountComponent;
  let fixture: ComponentFixture<GenreCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
