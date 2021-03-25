import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePagesCountComponent } from './average-pages-count.component';

describe('AveragePagesCountComponent', () => {
  let component: AveragePagesCountComponent;
  let fixture: ComponentFixture<AveragePagesCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveragePagesCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragePagesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
