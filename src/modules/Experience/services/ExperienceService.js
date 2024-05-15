import * as SQLite from "expo-sqlite";

class Experience {
  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    this.db = await SQLite.openDatabaseAsync("syncapp");
  }

  async create(id, expData) {
    const { title, company, from, to, description } = expData;
    return this.db.runAsync(
      "INSERT INTO experience ( connection_id, title, company, start_date, end_date, description) VALUES ( ? , ? , ? ,? , ? , ?)",
      [id, title, company, from, to, description]
    );
  }
}

export default new Experience();
