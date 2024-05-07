/**
 * Handles contact operations with database
 */

import { dbManager } from "../../../database/utils";

class ContactService {
  constructor(dbManager) {
    this.dbManager = dbManager;
  }

  getAllContacts() {
    return this.dbManager.readSQL("SELECT * FROM connections;");
  }

  async add(formData) {
    const { name, phoneNumber, email, timestamp } = formData;
    const contact = await this.dbManager.createSQL(
      "INSERT INTO connections (name, email, phone_number, created_at) VALUES (?, ?, ?, ?);",
      [name, email, phoneNumber, timestamp]
    );
    const contactId = contact.insertId;
    return contactId;
  }

  async delete(id) {
    return this.dbManager.createSQL("DELETE FROM connections WHERE id = ?;", [
      id,
    ]);
  }
}
export default new ContactService(dbManager);
