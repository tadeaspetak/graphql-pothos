import { writeFileSync } from "node:fs";

import { printSchema, lexicographicSortSchema } from "graphql";
import { ApolloServer, gql } from "apollo-server";
import { schema } from "./schema";

const server = new ApolloServer({
  context: async ({ req }) => {
    console.log(req.headers.authorization);
    return {
      isLoggedIn: !!req.headers.authorization,
    };
  },
  schema,
});

// check out the generated schema
writeFileSync("./schema.graphql", printSchema(lexicographicSortSchema(schema)));

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
