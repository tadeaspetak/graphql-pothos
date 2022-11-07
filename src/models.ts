export enum OrgMetricsSignupStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}
export interface OrgModel {
  id: string;
  name: string;
}

export interface UserModel {
  id: string;
  name: string;
  orgId: string;
}
