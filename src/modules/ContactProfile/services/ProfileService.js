import { dbManager } from "../../../database/utils";

class ProfileService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async getInfo(id) {
    const results = await this.dbManager.readSQL(
      "SELECT * FROM connections WHERE id = ?",
      [id]
    );

    return results[0];
  }
}

export default new ProfileService(dbManager);
