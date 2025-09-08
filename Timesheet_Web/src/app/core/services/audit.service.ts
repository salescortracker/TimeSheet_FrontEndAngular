import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Audit } from '../models/audit/audit.models';
import { environment } from '../../../../environment';
@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) { }
   private baseUrl = `${environment.apiBaseUrl}/audits`; // example API

  

  getAudits(): Observable<Audit[]> {
    return this.http.get<Audit[]>(this.baseUrl);
  }

  getAuditById(id: number): Observable<Audit> {
    return this.http.get<Audit>(`${this.baseUrl}/${id}`);
  }

  createAudit(audit: Audit): Observable<Audit> {
    return this.http.post<Audit>(this.baseUrl, audit);
  }

  updateAudit(id: number, audit: Audit): Observable<Audit> {
    return this.http.put<Audit>(`${this.baseUrl}/${id}`, audit);
  }

  deleteAudit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
