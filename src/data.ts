import { OrgModel, OrgMetricsSignupStatus, UserModel } from "./models";

export const users: UserModel[] = [
  { id: "1", name: "first user name", orgId: "1" },
  { id: "2", name: "second user name", orgId: "2" },
];

export const orgs: OrgModel[] = [
  { id: "1", name: "first org name" },
  { id: "2", name: "second org name" },
];

export const signups: {
  orgId: string;
  signups: { status: OrgMetricsSignupStatus; count: number }[];
}[] = [
  {
    orgId: "1",
    signups: [
      { status: OrgMetricsSignupStatus.pending, count: 1 },
      { status: OrgMetricsSignupStatus.rejected, count: 4 },
      { status: OrgMetricsSignupStatus.accepted, count: 0 },
    ],
  },
  {
    orgId: "2",
    signups: [
      { status: OrgMetricsSignupStatus.pending, count: 3 },
      { status: OrgMetricsSignupStatus.rejected, count: 0 },
      { status: OrgMetricsSignupStatus.accepted, count: 10 },
    ],
  },
];

export const impacts: { orgId: string; impact: number }[] = [
  { orgId: "1", impact: 10 },
  { orgId: "2", impact: 40 },
];
