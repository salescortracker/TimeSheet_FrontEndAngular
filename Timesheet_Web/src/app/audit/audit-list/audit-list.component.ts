import { Component } from '@angular/core';
import { AuditService } from '../../core/services/audit.service';
import { Audit } from '../../core/models/audit/audit.models';
@Component({
  selector: 'app-audit-list',
  standalone: false,
  templateUrl: './audit-list.component.html',
  styleUrl: './audit-list.component.css'
})
export class AuditListComponent {
audits: Audit[] = [];

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {
    this.loadAudits();
  }

  loadAudits() {
    this.auditService.getAudits().subscribe(data => {
      this.audits = data;
    });
  }

  deleteAudit(id: number) {
    if(confirm('Are you sure you want to delete this audit?')) {
      this.auditService.deleteAudit(id).subscribe(() => this.loadAudits());
    }
  }
}
