import { dbManager } from "../../../database/utils";

class GroupService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async add(groupData) {
    const { groupName, emoji, backgroundColor } = groupData;
    return await this.dbManager.createSQL(
      "INSERT INTO groups (name) VALUES (?);"[groupName]
    );
  }
}

export default new GroupService(dbManager);
