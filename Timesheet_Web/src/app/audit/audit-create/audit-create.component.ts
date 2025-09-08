import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuditService } from '../../core/services/audit.service';
@Component({
  selector: 'app-audit-create',
  standalone: false,
  templateUrl: './audit-create.component.html',
  styleUrl: './audit-create.component.css'
})
export class AuditCreateComponent {
auditForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auditService: AuditService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auditForm = this.fb.group({
      userID: ['', Validators.required],
      actionType: ['', Validators.required],
      actionDetails: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.auditForm.valid) {
      this.auditService.createAudit(this.auditForm.value).subscribe(() => {
        alert('Audit created successfully!');
        this.router.navigate(['/audit/list']);
      });
    }
  }
}
