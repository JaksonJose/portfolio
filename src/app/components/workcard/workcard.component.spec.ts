import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcardComponent } from './workcard.component';

describe('WorkcardComponent', () => {
  let component: WorkcardComponent;
  let fixture: ComponentFixture<WorkcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
