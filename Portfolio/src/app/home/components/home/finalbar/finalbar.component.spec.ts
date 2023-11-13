import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalbarComponent } from './finalbar.component';

describe('FinalbarComponent', () => {
  let component: FinalbarComponent;
  let fixture: ComponentFixture<FinalbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalbarComponent]
    });
    fixture = TestBed.createComponent(FinalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
