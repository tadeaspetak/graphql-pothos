import { builder } from "../builder";
builder.queryType(); // build the root query object first to be able to add query fields later

// TODO: would be nice to make sure we don't forget to import something
import "./org";
import "./user";

export const schema = builder.toSchema();
