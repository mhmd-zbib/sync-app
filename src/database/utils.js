import * as SQLite from "expo-sqlite";

class DatabaseManager {
  constructor() {
    this.db = SQLite.openDatabase("syncapp.db");
  }

  createSQL = (sql, params = []) =>
    new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, results) => resolve(results),
          (_, error) => {
            console.error(`SQL error: ${error.message} when running ${sql}`);
            reject(new Error(`SQL error: ${error.message}`));
          }
        );
      });
    });

  readSQL = (sql, params = []) =>
    new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, results) => resolve(results.rows._array),
          (_, error) => {
            console.error(`SQL error: ${error.message} when running ${sql}`);
            reject(new Error(`SQL error: ${error.message}`));
          }
        );
      });
    });
}
export const dbManager = new DatabaseManager();
