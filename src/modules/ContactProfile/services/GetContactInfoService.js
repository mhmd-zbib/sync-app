import { dbManager } from "../../../database/utils";

class GetContactProfileService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  getInfo(id) {
    return dbManager.readSQL("Select * FROM connections WHERE id = ? ", [id]);
  }
}

export default new GetContactProfileService(dbManager);
