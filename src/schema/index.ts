import { resolveOffsetConnection } from "@pothos/plugin-relay";
import { builder } from "../builder";
import { orgs, users } from "../data";
builder.queryType(); // build the root query object first to be able to add query fields later

import { Org } from "./org";
import { User } from "./user";

builder.queryFields((t) => ({
  org: t.field({
    type: Org,
    nullable: true, // fields are required by default
    args: { id: t.arg.id({ required: true }) }, // args are optional by default
    resolve: (_, { id }) => orgs.find((o) => o.id === id),
  }),
  user: t.field({
    type: User,
    nullable: true,
    args: { id: t.arg.id({ required: true }) },
    resolve: (_, { id }) => users.find((u) => u.id === id),
  }),
  users: t.connection({
    type: User,
    resolve: (_, args) =>
      resolveOffsetConnection({ args }, ({ limit, offset }) =>
        [...users.values()].slice(offset, offset + limit)
      ),
    // resolve: (parent, { first, last, before, after, b }) => {
    //   console.log({ first, last, before, after });
    //   return {
    //     pageInfo: {
    //       hasNextPage: false,
    //       hasPreviousPage: false,
    //       startCursor: "asdf",
    //       endCursor: "f",
    //     },
    //     edges: [
    //       {
    //         cursor: "asdf",
    //         node: { id: "asdf", name: "something", orgId: "1" },
    //       },
    //     ],
    //   };
    // },
  }),
}));

export const schema = builder.toSchema();
