/**
 * Handles contact operations with database
 */

import * as SQLite from "expo-sqlite";

class ContactService {
  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    this.db = await SQLite.openDatabaseAsync("syncapp");
  }

  async getAllContacts() {
    console.log("fetching contacts");
    return await this.db.getAllAsync("SELECT * FROM connections;");
  }

  async add(formData) {
    const { name, phoneNumber, email, timestamp } = formData;
    const contact = await this.db.runAsync(
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

  async getInfo(id) {
    const results = await this.db.getFirstAsync(
      "SELECT * FROM connections WHERE id = ?",
      [id]
    );

    return results[0];
  }
}
export default new ContactService();
