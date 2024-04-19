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
    created_at INTEGER
   );`,
  `CREATE TABLE IF NOT EXISTS social_links(
    link_id INTEGER PRIMARY KEY NOT NULL,
    connection_id INTEGER,
    platform TEXT,
    url TEXT,
    FOREIGN KEY (connection_id) REFERENCES connections(id)
  )`,
];
// `CREATE TABLE IF NOT EXISTS groups (
//     id INTEGER PRIMARY KEY NOT NULL,
//     name TEXT,
//     created_at INTEGER DEFAULT (strftime('%s', 'now')),
//     updated_at INTEGER DEFAULT (strftime('%s', 'now'))

// );`,
// `CREATE TABLE IF NOT EXISTS connections_groups (
//     connection_id INTEGER,
//     group_id INTEGER,
//     FOREIGN KEY (connection_id) REFERENCES connections (id),
//     FOREIGN KEY (group_id) REFERENCES groups (id)
// );`,
// `CREATE TABLE IF NOT EXISTS reminders_connections (
//     reminder_id INTEGER,
//     connection_id INTEGER,
//     FOREIGN KEY (reminder_id) REFERENCES reminders (id),
//     FOREIGN KEY (connection_id) REFERENCES connections (id)
// );`,
// `CREATE TABLE IF NOT EXISTS tags (
//     id INTEGER PRIMARY KEY NOT NULL,
//     tag_name TEXT NOT NULL,
//     created_at INTEGER DEFAULT (strftime('%s', 'now')),
//     updated_at INTEGER DEFAULT (strftime('%s', 'now'))

// );`,
// `CREATE TABLE IF NOT EXISTS connections_tags (
//     connection_id INTEGER NOT NULL,
//     tag_id INTEGER NOT NULL,
//     FOREIGN KEY (connection_id) REFERENCES connections (id),
//     FOREIGN KEY (tag_id) REFERENCES tags (id)
// );`,
// `CREATE TABLE IF NOT EXISTS links (
//     id INTEGER PRIMARY KEY NOT NULL,
//     url TEXT NOT NULL,
//     link_type TEXT CHECK(link_type IN ('Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'Other')),
//     created_at INTEGER DEFAULT (strftime('%s', 'now')),
//     updated_at INTEGER DEFAULT (strftime('%s', 'now'))

// );`,
// `CREATE TABLE IF NOT EXISTS connections_links (
//     connection_id INTEGER NOT NULL,
//     link_id INTEGER NOT NULL,
//     FOREIGN KEY (connection_id) REFERENCES connections (id),
//     FOREIGN KEY (link_id) REFERENCES links (id)
// );`,

const initDb = () => {
  db.transaction(
    (tx) => {
      tableSchemas.forEach((schema) => {
        tx.executeSql(schema);
      });
    },
    (error) => console.log("Error initializing database:", error),
    () => console.log("Database initialization successful")
  );
};

export default initDb;
