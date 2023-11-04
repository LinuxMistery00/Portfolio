import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaboutComponent } from './miniabout.component';

describe('MiniaboutComponent', () => {
  let component: MiniaboutComponent;
  let fixture: ComponentFixture<MiniaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniaboutComponent]
    });
    fixture = TestBed.createComponent(MiniaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
