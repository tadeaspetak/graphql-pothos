import { OrgModel } from "../../models";
import { orgs } from "../../data";
import { builder } from "../../builder";

import { OrgMetrics } from "./metrics";

export const Org = builder.objectRef<OrgModel>("Org").implement({
  fields: (t) => ({
    id: t.exposeID("id"), // nothing is exposed by default
    name: t.exposeString("name"),
    computed: t.string({ resolve: (o) => `computed ${o.name}` }),
    metrics: t.field({
      type: OrgMetrics,
      resolve: (o) => ({ orgId: o.id }), // pass `orgId` into the child resolver
    }),
  }),
});

// co-locate queries
builder.queryField("org", (t) =>
  t.field({
    type: Org,
    nullable: true, // fields are required by default
    args: { id: t.arg.id({ required: true }) }, // args are optional by default
    resolve: (_, { id }) => orgs.find((o) => o.id === id),
  })
);
