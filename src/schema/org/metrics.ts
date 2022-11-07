import { OrgMetricsSignupStatus } from "../../models";
import { impacts, signups } from "../../data";
import { builder } from "../../builder";

export const OrgMetrics = builder
  .objectRef<{ orgId: string }>("OrgMetrics") // signature of the object returned by the parent resolver
  .implement({
    fields: (t) => ({
      impact: t.int({
        resolve: ({ orgId }) =>
          impacts.find((i) => i.orgId === orgId)?.impact ?? 0,
      }),
      signups: t.field({ type: OrgMetricsSignups, resolve: (o) => o }),
    }),
  });

const OrgMetricsSignups = builder
  .objectRef<{ orgId: string }>("OrgMetricsSignups")
  .implement({
    fields: (t) => ({
      byStatus: t.field({
        type: [OrgMetricsSignupsResult], // ensure signature of the returned object
        args: {
          status: t.arg({ type: [OrgMetricsSignupStatus], required: true }),
        },
        resolve: ({ orgId }, { status }) =>
          signups
            .find((s) => s.orgId === orgId)
            ?.signups.filter((s) => status.includes(s.status)) ?? [],
      }),
    }),
  });

// enums need to be referenced this way to become available
builder.enumType(OrgMetricsSignupStatus, { name: "OrgMetricsSignupStatus" });

const OrgMetricsSignupsResult = builder.simpleObject(
  "OrgMetricsSignupsResult",
  {
    fields: (t) => ({
      count: t.int({}),
      status: t.field({ type: OrgMetricsSignupStatus }),
    }),
  }
);
