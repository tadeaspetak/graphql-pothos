import { IOrg } from "../types";
import { orgs } from "../../data";
import { builder } from "../../builder";

import { OrgMetrics } from "./metrics";

export const Org = builder.objectRef<IOrg>("Org").implement({
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
