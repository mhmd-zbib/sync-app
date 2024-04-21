import ContactsManager from "../core/database/databaseServices/ContactsManager";

const ContactsService = {
  createContact: async (contactData) => {
    const { name, email, phoneNumber, links } = contactData;

    if (!name) return;

    return ContactsManager.createContact(name, email, phoneNumber, links);
  },

  getContactDetails: async (id) => {
    let info = {};

    const details = await ContactsManager.getContactDetails(id);
    const socialLinks = await ContactsManager.getContactSocialLinks(id);
    const contactTags = await ContactsManager.getContactTags(id);

    console.log("tags", contactTags);

    info = details[0];
    info.socialLinks = socialLinks;
    info.tags = contactTags;
    return info;
  },

  getContactTags: async (id) => {
    return ContactsManager.getContactTags(id);
  },

  addContactDescription: async (contactId, description) => {
    return await ContactsManager.addContactDescription(contactId, description);
  },

  addTag: async (tagId, contactId) => {
    // if (tagId.length === 0) return;
    return await ContactsManager.addContactTags(tagId, contactId);
  },

  addContactNote: async (id, title, details) => {
    return await ContactsManager.addContactNote(id, title, details);
  },

  getAllContacts: async () => {
    return await ContactsManager.getAllContacts();
  },

  getTaggedContacts: async (tag) => {
    return ContactsManager.getTaggedContacts(tag);
  },
};

export default ContactsService;
