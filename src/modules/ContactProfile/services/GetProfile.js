import { dbManager } from "../../../database/utils";

class GetProfile {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async info(id) {
    const results = await this.dbManager.readSQL(
      "SELECT * FROM connections WHERE id = ?",
      [id]
    );

    return results[0];
  }
}

export default new GetProfile(dbManager);
