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
    const id = groupCreate.lastInsertRowId;
    console.log(id, "this is the id of the creation");
    return id;
  }

  async addContacts(id, contacts, timestamp) {
    for (let contact of contacts) {
      console.log(contact, id, timestamp);
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
    console.log("getting contacts");

    const getContacts = await this.db.getAllAsync(
      "SELECT c.name, c.id, gc.created_at FROM connections c JOIN group_connections gc ON c.id = gc.connection_id WHERE gc.group_id = ?;",
      [id]
    );

    console.log(getContacts, "the contacts");
    return getContacts;
  }

  async getDetails(id) {
    const details = await this.db.getFirstAsync(
      "SELECT * FROM groups WHERE id = ?",
      [id]
    );
    console.log(details, "details");
    return details;
  }

  async delete(id) {
    return await this.db.runAsync("DELETE FROM groups WHERE id = ?", [id]);
  }
}

export default new GroupService();
