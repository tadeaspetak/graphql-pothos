import { UserModel } from "../../models";
import { orgs, users } from "../../data";
import { builder } from "../../builder";

import { Org } from "../org";

export const User = builder.objectRef<UserModel>("User").implement({
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    computed: t.string({ resolve: (u) => `computed user: ${u.name}` }),
    org: t.field({
      type: Org, // reference other branches of the schema in this super simple way
      resolve: ({ orgId }) => orgs.find((o) => o.id === orgId)!,
    }),
  }),
});

// co-locate queries
builder.queryField("user", (t) =>
  t.field({
    type: User,
    nullable: true,
    args: { id: t.arg.id({ required: true }) },
    resolve: (_, { id }) => users.find((u) => u.id === id),
  })
);
