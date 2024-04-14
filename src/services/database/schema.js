import Realm from "realm";

// Base schema
const BaseSchema = {
  properties: {
    id: "int",
    dateAdded: "date",
    lastUpdated: "date",
  },
};

// Extend the base schema for specific tables
const ConnectionSchema = {
  name: "Connection",
  primaryKey: "id",
  properties: {
    ...BaseSchema.properties,
    name: "string",
    tags: "Tag[]",
    reminders: "Reminder[]",
    group: "Group",
  },
};

const TagSchema = {
  name: "Tag",
  primaryKey: "id",
  properties: {
    ...BaseSchema.properties,
    label: "string",
  },
};

const ReminderSchema = {
  name: "Reminder",
  primaryKey: "id",
  properties: {
    ...BaseSchema.properties,
    date: "date",
    message: "string",
  },
};

const GroupSchema = {
  name: "Group",
  primaryKey: "id",
  properties: {
    ...BaseSchema.properties,
    title: "string",
    connections: "Connection[]",
  },
};

// Database configuration
const realmConfig = {
  schema: [ConnectionSchema, TagSchema, ReminderSchema, GroupSchema],
  schemaVersion: 0,
};

export default realmConfig;
