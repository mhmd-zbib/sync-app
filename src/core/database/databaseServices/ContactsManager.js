import * as SQLite from "expo-sqlite";

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

  getAllContacts() {
    return this.readSQL("SELECT * FROM connections;");
  }

  getTaggedContacts(tag) {
    return this.executeSql("SELECT * FROM connections WHERE tags LIKE ?;", [
      `%${tag}%`,
    ]);
  }
}

export default new ContactsManager();
