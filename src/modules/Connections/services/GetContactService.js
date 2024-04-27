/**
 * Returns from the local database all the contacts for the user
 */

import { dbManager } from "../../../database/utils";

class GetConnectionService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  getAllContacts() {
    return this.dbManager.readSQL("SELECT * FROM connections;");
  }
}
export default new GetConnectionService(dbManager);
