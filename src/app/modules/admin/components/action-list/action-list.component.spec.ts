import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionListComponent } from './action-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActionListComponent', () => {
  let component: ActionListComponent;
  let fixture: ComponentFixture<ActionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionListComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
