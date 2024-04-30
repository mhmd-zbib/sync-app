import { dbManager } from "../../../database/utils";

class EditProfile {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async notes(noteData) {
    const { id, title, description, timestamp } = noteData;

    return this.dbManager.createSQL(
      "INSERT INTO notes (connection_id, title, details, created_at) VALUES (?,?,?,?)",
      [id, title, description, timestamp]
    );
  }
}

export default new EditProfile(dbManager);
