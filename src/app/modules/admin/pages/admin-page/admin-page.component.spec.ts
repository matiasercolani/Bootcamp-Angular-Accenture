import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import { FormEditComponent } from '@modules/admin/components/form-edit/form-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActionListComponent } from '@modules/admin/components/action-list/action-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPageComponent,FormEditComponent,ActionListComponent],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
