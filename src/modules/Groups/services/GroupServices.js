import { dbManager } from "../../../database/utils";

class GroupService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async create(groupData) {
    const { groupName, emoji, backgroundColor, timestamp } = groupData;

    const group = await this.dbManager.createSQL(
      "INSERT INTO groups (name, emoji, background_color, created_at)  VALUES (?, ?, ?, ?)",
      [groupName, emoji, backgroundColor, timestamp]
    );

    console.log("group id", group.insertId);
    return group.insertId;
  }

  async addContacts(id, contacts) {
    for (let contact of contacts) {
      return await this.dbManager.createSQL(
        "INSERT INTO group_contacts WHERE id = ? (contacts) VALUES (?)",
        [id, contact]
      );
    }
  }

  async list() {
    const groups = await this.dbManager.readSQL("SELECT * FROM groups");
    return groups;
  }
}

export default new GroupService(dbManager);
