import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { ActionListComponent } from './components/action-list/action-list.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    FormEditComponent,
    ActionListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
