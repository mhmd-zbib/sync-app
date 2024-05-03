import { dbManager } from "../../../database/utils";

class GroupService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async add(groupData) {
    return await this.dbManager.createSQL(
      "INSERT INTO groups (name) VALUES (?);"[name]
    );
  }
}

export default new GroupService(dbManager);
