export interface PageCursor {
  cursor: string;
  pageNumber: number;
  isCurrent: boolean;
}

export interface PageCursors {
  first: PageCursor;
  around: PageCursor[];
  last: PageCursor;
}

export enum OrgMetricsSignupStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}
export interface IOrg {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  name: string;
  orgId: string;
}
