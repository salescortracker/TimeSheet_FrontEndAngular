import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditListComponent } from '../audit-list/audit-list.component';
import { AuditCreateComponent } from '../audit-create/audit-create.component';
import { AuditDetailComponent } from '../audit-detail/audit-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuditRoutingModule } from './audit-routing.module';



@NgModule({
  declarations: [ AuditListComponent,
    AuditCreateComponent,
    AuditDetailComponent],
  imports: [
      CommonModule,
    ReactiveFormsModule,
    AuditRoutingModule,
  ]
})
export class AuditModule { }
