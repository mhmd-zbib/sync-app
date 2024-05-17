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

    const contactId = contact.lastInsertRowId;
    return contactId;
  }

  async delete(id) {
    console.log(id);
    return this.db.runAsync("DELETE FROM connections WHERE id = ?;", [id]);
  }

  async editDescription(id, description) {
    return this.db.runAsync(
      "UPDATE connections SET description = ? WHERE id = ?",
      [description, id]
    );
  }

  async editContact(id, phone, email) {
    return this.db.runAsync(
      "UPDATE connections SET phone_number = ?, email = ? WHERE id = ?",
      [phone, email, id]
    );
  }

  async getInfo(id) {
    let info = await this.db.getFirstAsync(
      "SELECT * FROM connections WHERE id = ?",
      [id]
    );
    const experience = await this.db.getAllAsync(
      "SELECT * FROM experience WHERE connection_id = ?",
      [id]
    );

    const tags = await this.db.getAllAsync(
      "SELECT tags.name, tags.color, tags.id FROM connection_tags JOIN tags ON connection_tags.tag_id = tags.id WHERE connection_tags.connection_id = ?;",
      [id]
    );

    info.experience = experience;
    info.tags = tags;
    console.log(info, "thats the backend");

    return info;
  }

  async getExperience(id) {
    return await this.db.getFirstAsync(
      "SELECT * FROM experience WHERE connection_id = ?",
      [id]
    );
  }

  async editBirthday(id, date) {
    return await this.db.runAsync(
      "UPDATE connections SET birthday = ? WHERE id = ?",
      [date, id]
    );
  }

  async addTags(id, tags) {
    for (let tag of tags) {
      await this.db.runAsync(
        "INSERT INTO connection_tags (connection_id, tag_id) VALUES (?, ?);",
        [id, tag]
      );
    }
  }

  async removeTags(id, tags) {
    for (let tag of tags) {
      await this.db.runAsync(
        "DELETE FROM connection_tags WHERE connection_id = ? AND tag_id = ?;",
        [id, tag]
      );
    }
  }

  async editProfile(id, name, birthday) {
    await this.db.runAsync(
      "UPDATE connections SET name = ?, birthday = ? WHERE id = ?",
      [name, birthday, id]
    );
  }
}
export default new ContactService();
