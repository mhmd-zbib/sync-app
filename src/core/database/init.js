import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("syncapp.db");

const tableSchemas = [
  `CREATE TABLE IF NOT EXISTS connections (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT,
      email TEXT,
      phone_number TEXT,
      description TEXT,
      created_at INTEGER
  )`,
  `CREATE TABLE IF NOT EXISTS reminders (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT,
    time TEXT,
    description TEXT,
    isDone BOOLEAN,
    created_at INTEGER
  )`,
  `CREATE TABLE IF NOT EXISTS social_links(
    link_id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    platform TEXT,
    url TEXT,
    FOREIGN KEY (connection_id) REFERENCES connections(id)
  )`,
  `CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    title TEXT,
    details TEXT,
    created_at INTEGER,
    FOREIGN KEY (connection_id) REFERENCES connections(id)
  )`,
  `CREATE TABLE IF NOT EXISTS tags(
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT,
    color TEXT,
    created_at INTEGER
  )`,
  `CREATE TABLE IF NOT EXISTS connection_tags (
    id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY (connection_id) REFERENCES connections(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
  )`,
];

const initDb = () => {
  db.transaction(
    (tx) => {
      tableSchemas.forEach((schema) => {
        tx.executeSql(
          schema,
          [],
          () => console.log("Table created successfully"),
          (_, error) => console.error("Error creating table:", error)
        );
      });
    },
    (error) => console.error("Error initializing database:", error),
    () => console.log("Database initialization successful")
  );
};

export default initDb;
