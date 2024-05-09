import { dbManager } from "../../../database/utils";

class GroupService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async create(groupData) {
    const { groupName, emoji, backgroundColor, timestamp, selectedContacts } =
      groupData;
    const groupCreate = await this.dbManager.createSQL(
      "INSERT INTO groups (name, emoji, background_color, created_at, member_count)  VALUES (?, ?, ?, ?, ?)",
      [groupName, emoji, backgroundColor, timestamp, selectedContacts.length]
    );
    const id = groupCreate.insertId;
    return id;
  }

  async addContacts(id, contacts, timestamp) {
    for (let contact of contacts) {
      await this.dbManager.createSQL(
        "INSERT INTO group_connections ( group_id, connection_id, created_at) VALUES (?, ?,?)",
        [id, contact, timestamp]
      );
    }
    return id;
  }

  async list() {
    const groups = await this.dbManager.readSQL("SELECT * FROM groups");
    return groups;
  }
  async getContacts(id) {
    const data = await this.dbManager.readSQL(
      "SELECT c.name, c.id, gc.created_at FROM connections c JOIN group_connections gc ON c.id = gc.connection_id WHERE gc.group_id = ?;",
      [id]
    );
    return data;
  }

  async getDetails(id) {
    const details = await this.dbManager.readSQL(
      "SELECT * FROM groups WHERE id = ?",
      [id]
    );
    return details[0];
  }

  async delete(id) {
    return await this.dbManager.createSQL("DELETE FROM groups WHERE id = ?", [
      id,
    ]);
  }
}

export default new GroupService(dbManager);
