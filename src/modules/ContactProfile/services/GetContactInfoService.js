import { ColorSchemeStore } from "nativewind/dist/style-sheet/color-scheme";
import { dbManager } from "../../../database/utils";

class GetContactProfileService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  async getInfo(id) {
    const results = await this.dbManager.readSQL(
      "SELECT * FROM connections WHERE id = ?",
      [id]
    );
    if (results.length === 0) {
      console.error("No id available");
      return null;
    }
    return results[0];
  }
}

export default new GetContactProfileService(dbManager);
