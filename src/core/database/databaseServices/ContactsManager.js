import { dbManager } from "../utils";

class ContactsManager {
  async createContact(name, email, phoneNumber, links) {
    const date = new Date();
    const timestamp = date.getTime();
    const contactResult = await dbManager.createSQL(
      "INSERT INTO connections (name, email, phone_number, created_at) VALUES (?, ?, ?, ?);",
      [name, email, phoneNumber, timestamp]
    );
    const userId = contactResult.insertId;
    if (links && links.length > 0) {
      await this.addSocialLinks(userId, links);
    }
    return userId;
  }

  async addSocialLinks(userId, links) {
    if (links.length !== 0) {
      for (const link of links) {
        const sql =
          "INSERT INTO social_links (connection_id, platform, url) VALUES (?,?,?);";
        const params = [userId, link.platform, link.url];

        await dbManager.readSQL(sql, params);
      }
    }
    return userId;
  }

  async addContactDescription(id, description) {
    return dbManager.readSQL(
      "UPDATE connections SET description = ?  WHERE id = ? ;",
      [description, id]
    );
  }

  async editContactPhoneNum(id, phoneNum) {
    return dbManager.readSQL(
      "UPDATE connections SET phone_number = ? WHERE id = ?;",
      [phoneNum, id]
    );
  }

  async editContactEmail(id, email) {
    return dbManager.readSQL("UPDATE connections SET email = ? WHERE id = ?;", [
      email,
      id,
    ]);
  }

  async addContactNote(id, title, details) {
    const date = new Date();
    const timestamp = date.getTime();
    return dbManager.readSQL(
      " INSERT INTO notes (connection_id, title, details, created_at) VALUES (?,?,?,?);",
      [id, title, details, timestamp]
    );
  }

  async addContactTags(tagIds, contactId) {
    for (const tagId of tagIds) {
      await dbManager.createSQL(
        "INSERT INTO connection_tags (tag_id, connection_id) VALUES (?,?)",
        [tagId, contactId]
      );
    }
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

  async addContactExperience(
    id,
    jobTitle,
    position,
    companyName,
    websiteLink,
    startDate,
    endDate
  ) {
    return dbManager.createSQL(
      "INSERT INTO experience id =? job_title= ? position =? company_name = ? website_link = ? start_date= ? end_date = ? ",
      [id, jobTitle, position, companyName, websiteLink, startDate, endDate]
    );
  }

  async getContactExperiences(id) {
    return dbManager.readSQL("SELECT * FROM experience WHERE id = ? ", [id]);
  }

  async getContactTags(id) {
    return dbManager.readSQL(
      "SELECT * FROM tags t JOIN connection_tags ct ON t.id = ct.tag_id  WHERE connection_id = ? ",
      [id]
    );
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
