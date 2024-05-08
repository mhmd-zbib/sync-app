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

    return groupCreate.insertId;
  }

  async addContacts(id, contacts) {
    for (let contact of contacts) {
      return await this.dbManager.createSQL(
        "INSERT INTO group_connections ( group_id, connection_id) VALUES (?, ?)",
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
