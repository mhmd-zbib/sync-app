import { dbManager } from "../../../database/utils";
import * as SQLite from "expo-sqlite";

class NoteService {
  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    this.db = await SQLite.openDatabaseAsync("syncapp");
  }

  async add(noteData) {
    const { connection_id, title, details, timestamp } = noteData;
    console.log(noteData);
    return this.db.runAsync(
      "INSERT INTO notes (connection_id, title, details, created_at) VALUES (?,?,?,?)",
      [connection_id, title, details, timestamp]
    );
  }

  async edit(noteData) {
    const { id, title, details, timestamp } = noteData;
    return this.dbManager.createSQL(
      "UPDATE notes SET title = ?, details = ?, created_at = ? WHERE id = ?",
      [title, details, timestamp, id]
    );
  }

  async getDetails(id) {
    const result = await this.db.getFirstAsync(
      "SELECT * FROM notes WHERE id = ?",
      [id]
    );

    return result;
  }

  async list(id) {
    console.log(id, "id!!");
    return await this.db.getAllAsync(
      "SELECT * FROM notes WHERE connection_id = ?",
      [id]
    );
  }

  async delete(id) {
    console.log("deleting", id);
    return await this.db.runAsync("DELETE FROM notes WHERE id = ?", [id]);
  }
}

export default new NoteService(dbManager);
