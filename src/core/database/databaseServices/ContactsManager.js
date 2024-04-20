import { dbManager } from "../utils";

class ContactsManager {
  async createContact(name, email, phoneNumber, links) {
    const date = new Date();
    const timestamp = date.getTime();
    const contactResult = await dbManager.readSQL(
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

      await dbManager.readSQL(sql, params);
    }
    console.log("Socials added");
  }

  async addContactDescription(id, description) {
    return dbManager.readSQL(
      "UPDATE connections SET description = ?  WHERE id = ? ;",
      [description, id]
    );
  }

  async addContactNote(id, title, details) {
    const date = new Date();
    const timestamp = date.getTime();
    return dbManager.readSQL(
      " INSERT INTO notes (connection_id, title, details, created_at) VALUES (?,?,?,?);",
      [id, title, details, timestamp]
    );
  }

  getContactsNotes(id) {
    return dbManager.readSQL(
      "SELECT title, details FROM notes WHERE connection_id = ? ",
      [id]
    );
  }

  getAllContacts() {
    return dbManager.readSQL("SELECT * FROM connections;");
  }

  getContactDetails(id) {
    console.log(`Fetching details for ID: ${id}`);
    return dbManager.readSQL("SELECT * FROM connections WHERE id = ?", [id]);
  }

  getContactSocialLinks(id) {
    return dbManager.readSQL(
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
