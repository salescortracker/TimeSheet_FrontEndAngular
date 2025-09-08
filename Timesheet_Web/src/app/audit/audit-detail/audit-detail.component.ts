import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuditService } from '../../core/services/audit.service';
import { Audit } from '../../core/models/audit/audit.models';
@Component({
  selector: 'app-audit-detail',
  standalone: false,
  templateUrl: './audit-detail.component.html',
  styleUrl: './audit-detail.component.css'
})
export class AuditDetailComponent {
auditForm!: FormGroup;
  auditID!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private auditService: AuditService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auditID = Number(this.route.snapshot.paramMap.get('id'));
    this.auditForm = this.fb.group({
      userID: ['', Validators.required],
      actionType: ['', Validators.required],
      actionDetails: ['', Validators.required]
    });

    this.loadAudit();
  }

  loadAudit() {
    this.auditService.getAuditById(this.auditID).subscribe((audit: Audit) => {
      this.auditForm.patchValue(audit);
    });
  }

  onSubmit() {
    if (this.auditForm.valid) {
      this.auditService.updateAudit(this.auditID, this.auditForm.value).subscribe(() => {
        alert('Audit updated successfully!');
        this.router.navigate(['/audit/list']);
      });
    }
  }
}
