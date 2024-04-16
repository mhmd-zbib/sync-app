import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("syncapp.db");

const initDb = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS connections (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT,
        email TEXT,
        phone_number TEXT,
        tags TEXT
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reminders (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT,
        time TEXT,
        description TEXT
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS connections_groups (
        connection_id INTEGER,
        group_id INTEGER,
        FOREIGN KEY (connection_id) REFERENCES connections (id),
        FOREIGN KEY (group_id) REFERENCES groups (id)
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reminders_connections (
        reminder_id INTEGER,
        connection_id INTEGER,
        FOREIGN KEY (reminder_id) REFERENCES reminders (id),
        FOREIGN KEY (connection_id) REFERENCES connections (id)
      );`
    );
  });
};

export default initDb;
