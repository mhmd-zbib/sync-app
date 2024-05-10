import * as SQLite from "expo-sqlite";

const connectionsTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS connections (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT,
    email TEXT,
    phone_number TEXT,
    description TEXT,
    created_at INTEGER
  )`,
};

const remindersTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS reminders (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT,
    time TEXT,
    description TEXT,
    isDone BOOLEAN,
    created_at INTEGER
  )`,
};

const socialLinksTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS social_links(
    link_id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    platform TEXT,
    url TEXT,
    FOREIGN KEY (connection_id) REFERENCES connections(id)
  )`,
};

const notesTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    title TEXT,
    details TEXT,
    created_at INTEGER,
    FOREIGN KEY (connection_id) REFERENCES connections(id)
  )`,
};

const tagsTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS tags(
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT,
    color TEXT,
    created_at INTEGER
  )`,
};

const connectionTagsTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS connection_tags (
    id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY (connection_id) REFERENCES connections(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
  )`,
};

const experienceTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS experience (
    id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    job_title TEXT,
    position TEXT,
    company_name TEXT,
    website_link TEXT,
    start_date INTEGER,
    end_date INTEGER
  )`,
};

const groupsTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS groups (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT,
    emoji TEXT,
    background_color TEXT,
    created_at INTEGER,
    last_updated INTEGER,
    member_count INTEGER
  )`,
};

const groupConnectionsTableSchema = {
  version: 1,
  statement: `CREATE TABLE IF NOT EXISTS group_connections (
    id INTEGER PRIMARY KEY NOT NULL,
    group_id INTEGER,
    connection_id INTEGER,
    created_at INTEGER,
    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
    FOREIGN KEY (connection_id) REFERENCES connections(id) ON DELETE CASCADE
  )`,
};

const initDb = async () => {
  const db = await SQLite.openDatabaseAsync("syncapp");
  const tableSchemas = [
    connectionsTableSchema,
    remindersTableSchema,
    socialLinksTableSchema,
    notesTableSchema,
    tagsTableSchema,
    connectionTagsTableSchema,
    experienceTableSchema,
    groupsTableSchema,
    groupConnectionsTableSchema,
  ];

  try {
    for (const schema of tableSchemas) {
      await db.execAsync(schema.statement);
    }
    console.log("Tables  created successfully");
  } catch (e) {
    console.error("Error initializing database:", e);
  }
};

export default initDb;
