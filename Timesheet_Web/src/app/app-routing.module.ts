import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
    {
    path: 'audit',
    loadChildren: () => import('./audit/audit/audit.module').then(m => m.AuditModule)
  },
  { path: '', redirectTo: 'audit/list', pathMatch: 'full' },
  { path: '**', redirectTo: 'audit/list' } // fallback

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
