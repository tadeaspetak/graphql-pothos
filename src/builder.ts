import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import RelayPlugin from "@pothos/plugin-relay";

export const builder = new SchemaBuilder({
  plugins: [RelayPlugin, SimpleObjectsPlugin],
  relayOptions: {
    clientMutationId: "omit",
    cursorType: "String",
    idFieldName: "globalId", // name of the global id
  },
});
