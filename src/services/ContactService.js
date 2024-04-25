import ContactsManager from "../core/database/databaseServices/ContactsManager";

class ContactsService {
  async createContact(contactData) {
    console.log("I got sent the data", contactData);
    const { name, email, phoneNumber, socialMediaLink } = contactData;
    if (!name) return;
    const saveContact = ContactsManager.createContact(
      name,
      email,
      phoneNumber,
      socialMediaLink
    );
    console.log(saveContact, " data");
    return saveContact;
  }

  async getContactDetails(id) {
    const details = await ContactsManager.getContactDetails(id);
    const socialLinks = await ContactsManager.getContactSocialLinks(id);
    const tags = await ContactsManager.getContactTags(id);
    return { ...details[0], socialLinks, tags };
  }

  async editContactConnection(id, phoneNumber, email) {
    if (!id) return;
    if (!phoneNumber && !email) return;

    let newPhoneNum = phoneNumber.trim("");
    let newEmail = email.trim("");

    console.log(id, newPhoneNum, newEmail, "data");

    if (email) ContactsManager.editContactEmail(id, newEmail);
    if (phoneNumber) ContactsManager.editContactPhoneNum(id, newPhoneNum);
    return;
  }

  async addContactDescription(contactId, description) {
    return ContactsManager.addContactDescription(contactId, description);
  }

  async addTag(tagId, contactId) {
    return ContactsManager.addContactTags(tagId, contactId);
  }

  async addContactNote(id, title, details) {
    return ContactsManager.addContactNote(id, title, details);
  }

  async getAllContacts() {
    return ContactsManager.getAllContacts();
  }

  async getTaggedContacts(tag) {
    return ContactsManager.getTaggedContacts(tag);
  }
}

export default new ContactsService();
