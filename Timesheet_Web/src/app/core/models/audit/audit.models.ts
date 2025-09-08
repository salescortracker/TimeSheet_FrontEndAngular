export interface Audit {
  auditID: number;
  userID: number;
  actionType: string;
  actionDetails: string;
  createdAt?: Date;
  createdBy?: string;
  modifiedAt?: Date;
  modifiedBy?: string;
}