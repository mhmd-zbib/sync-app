import * as SQLite from "expo-sqlite";

class DatabaseManager {
  constructor() {
    this.db = SQLite.openDatabase("syncapp.db");
  }

  async createSQL(sql, params = []) {
    try {
      const results = await this.executeSQL(sql, params);
      return results;
    } catch (error) {
      console.error(`Error executing SQL: ${sql}`, error);
      throw new Error(`Error when running SQL: ${error.message}`);
    }
  }

  async readSQL(sql, params = []) {
    try {
      const results = await this.executeSQL(sql, params);
      return results.rows._array;
    } catch (error) {
      console.error(`Error reading SQL: ${sql}`, error);
      throw new Error(`Error when reading SQL: ${error.message}`);
    }
  }

  executeSQL(sql, params = []) {
    return new Promise((resolve, reject) => {
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
  }
}

export const dbManager = new DatabaseManager();
