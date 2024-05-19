import * as SQLite from "expo-sqlite";

class GroupService {
  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    this.db = await SQLite.openDatabaseAsync("syncapp");
  }

  async create(groupData) {
    const { groupName, emoji, backgroundColor, timestamp, selectedContacts } =
      groupData;
    const groupCreate = await this.db.runAsync(
      "INSERT INTO groups (name, emoji, background_color, created_at, member_count)  VALUES (?, ?, ?, ?, ?)",
      [groupName, emoji, backgroundColor, timestamp, selectedContacts.length]
    );
    const id = groupCreate.insertId;
    return id;
  }

  async addContacts(id, contacts, timestamp) {
    for (let contact of contacts) {
      await this.db.runAsync(
        "INSERT INTO group_connections ( group_id, connection_id, created_at) VALUES (?, ?,?)",
        [id, contact, timestamp]
      );
    }
    return id;
  }

  async list() {
    console.log("fetching groups");
    return await this.db.getAllAsync("SELECT * FROM groups");
  }

  async getContacts(id) {
    const data = await this.db.getAllAsync(
      "SELECT c.name, c.id, gc.created_at FROM connections c JOIN group_connections gc ON c.id = gc.connection_id WHERE gc.group_id = ?;",
      [id]
    );
    return data;
  }

  async getDetails(id) {
    const details = await this.db.getFirstAsync(
      "SELECT * FROM groups WHERE id = ?",
      [id]
    );
    return details;
  }

  async delete(id) {
    return await this.db.runAsync("DELETE FROM groups WHERE id = ?", [id]);
  }
}

export default new GroupService();
