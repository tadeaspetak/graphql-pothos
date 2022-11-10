import { IOrg, OrgMetricsSignupStatus, IUser } from "./schema/types";

export const users: IUser[] = [
  { id: "1", name: "first user name", orgId: "1" },
  { id: "2", name: "second user name", orgId: "2" },
  { id: "3", name: "third user name", orgId: "2" },
  { id: "4", name: "fourth user name", orgId: "2" },
  { id: "5", name: "fifth user name", orgId: "2" },
  { id: "6", name: "sixth user name", orgId: "2" },
  { id: "7", name: "seventh user name", orgId: "2" },
];
for (let i = 10; i < 100; i++) {
  users.push({ id: `${i}`, name: `${i}-th user name`, orgId: "1" });
}

export const orgs: IOrg[] = [
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
