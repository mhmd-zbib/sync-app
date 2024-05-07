import { dbManager } from "../../../database/utils";

class NoteService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async add(noteData) {
    const { connection_id, title, details, timestamp } = noteData;
    console.log(noteData);
    return this.dbManager.createSQL(
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
    const result = await this.dbManager.readSQL(
      "SELECT * FROM notes WHERE id = ?",
      [id]
    );
    return result[0];
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
