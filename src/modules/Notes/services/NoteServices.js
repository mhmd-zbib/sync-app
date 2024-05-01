import { dbManager } from "../../../database/utils";

class NoteService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async add(noteData) {
    const { id, title, description, timestamp } = noteData;

    return this.dbManager.createSQL(
      "INSERT INTO notes (connection_id, title, details, created_at) VALUES (?,?,?,?)",
      [id, title, description, timestamp]
    );
  }

  async list(id) {
    return await this.dbManager.readSQL(
      "SELECT * FROM notes WHERE connection_id = ?",
      [id]
    );
  }

  async delete(id) {
    console.log("deleting", id);
    return await this.dbManager.createSQL("DELETE FROM notes WHERE id = ?", [
      id,
    ]);
  }
}

export default new NoteService(dbManager);
