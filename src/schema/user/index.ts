import { IUser } from "../types";
import { orgs, users } from "../../data";
import { builder } from "../../builder";

import { Org } from "../org";

export const UserRef = builder.objectRef<IUser>("User");
export const User = builder.node(UserRef, {
  id: { resolve: (u) => u.id }, // will be called `globalID` as described in the config of the plugin
  loadMany: (ids) => ids.map((id) => users.find((u) => u.id === id)), // automatically cached; we probably don't need this because we have loaders
  fields: (t) => ({
    id: t.exposeID("id"), // internal id
    name: t.exposeString("name"),
    computed: t.string({ resolve: (u) => `computed user: ${u.name}` }),
    org: t.field({
      type: Org, // reference other branches of the schema in this super simple way
      resolve: ({ orgId }) => orgs.find((o) => o.id === orgId)!,
    }),
  }),
});
