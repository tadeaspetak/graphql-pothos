import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import RelayPlugin from "@pothos/plugin-relay";
import ScopeAuthPlugin from "@pothos/plugin-scope-auth";
import { User } from "./schema/user";

export const builder = new SchemaBuilder<{
  AuthScopes: {
    public: boolean;
  };
  Context: {
    isLoggedIn: boolean;
  };
}>({
  plugins: [RelayPlugin, SimpleObjectsPlugin, ScopeAuthPlugin],
  authScopes: async (context) => ({
    public: context.isLoggedIn,
  }),
  relayOptions: {
    clientMutationId: "omit",
    cursorType: "String",
    idFieldName: "globalId", // name of the global id
  },
});
