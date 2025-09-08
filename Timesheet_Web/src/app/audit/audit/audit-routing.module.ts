import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditListComponent } from '../audit-list/audit-list.component';
import { AuditCreateComponent } from '../audit-create/audit-create.component';
import { AuditDetailComponent } from '../audit-detail/audit-detail.component';

const routes: Routes = [
  { path: 'list', component: AuditListComponent },
  { path: 'create', component: AuditCreateComponent },
  { path: 'detail/:id', component: AuditDetailComponent },
  { path: 'edit/:id', component: AuditDetailComponent } // reuse detail for edit
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule { }