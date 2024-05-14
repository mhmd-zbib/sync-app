import * as SQLite from "expo-sqlite";

class TagService {
  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    this.db = await SQLite.openDatabaseAsync("syncapp");
  }

  async create(tagData) {
    console.log(tagData, "weee");

    const { name, color } = tagData;
    return await this.db.runAsync(
      "INSERT INTO tags (name, color) VALUES (?, ?)",
      [name, color]
    );
  }

  async list() {
    return await this.db.getAllAsync("SELECT * FROM tags");
  }
}
export default new TagService();
