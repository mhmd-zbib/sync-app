import * as SQLite from "expo-sqlite";
import DetailsContactPage from "../../../pages/contacts/DetailsContactPage";

class ContactsManager {
  constructor() {
    this.db = SQLite.openDatabase("syncapp.db");
  }

  createSQL = (sql, params = []) =>
    new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, results) => resolve(results),
          (_, error) => {
            console.error(`SQL error: ${error.message} when running ${sql}`);
            reject(new Error(`SQL error: ${error.message}`));
          }
        );
      });
    });

  readSQL = (sql, params = []) =>
    new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, results) => resolve(results.rows._array),
          (_, error) => {
            console.error(`SQL error: ${error.message} when running ${sql}`);
            reject(new Error(`SQL error: ${error.message}`));
          }
        );
      });
    });

  async createContact(name, email, phoneNumber, links) {
    const date = new Date();
    const timestamp = date.getTime();
    const contactResult = await this.createSQL(
      "INSERT INTO connections (name, email, phone_number, created_at) VALUES (?, ?, ?, ?);",
      [name, email, phoneNumber, timestamp]
    );

    const userId = contactResult.insertId;
    await this.addSocialLinks(userId, links);
  }

  async addSocialLinks(userId, links) {
    for (const link of links) {
      const sql =
        "INSERT INTO social_links (connection_id, platform, url) VALUES (?,?,?);";
      const params = [userId, link.platform, link.url];

      await this.createSQL(sql, params);
    }
    console.log("Socials added");
  }

  async addContactDescription(id, description) {
    return this.createSQL(
      "UPDATE connections SET description = ?  WHERE id = ? ;",
      [description, id]
    );
  }

  async addContactNote(id, title, details) {
    const date = new Date();
    const timestamp = date.getTime();
    return this.createSQL(
      " INSERT INTO notes (connection_id, title, details, created_at) VALUES (?,?,?,?);",
      [id, title, details, timestamp]
    );
  }

  getContactsNotes(id) {
    return this.readSQL(
      "Select title, details FROM notes WHERE connection_id = ? ",
      [id]
    );
  }

  getAllContacts() {
    return this.readSQL("SELECT * FROM connections;");
  }

  getContactDetails(id) {
    console.log(`Fetching details for ID: ${id}`);
    return this.readSQL("SELECT * FROM connections WHERE id = ?", [id]);
  }

  getContactSocialLinks(id) {
    return this.readSQL(
      "SELECT platform, url FROM social_links WHERE connection_id = ? ",
      [id]
    );
  }

  getTaggedContacts(tag) {
    return this.executeSql("SELECT * FROM connections WHERE tags LIKE ?;", [
      `%${tag}%`,
    ]);
  }
}

export default new ContactsManager();
