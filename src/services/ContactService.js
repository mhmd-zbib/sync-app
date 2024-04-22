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

    info = details[0];
    info.socialLinks = socialLinks;
    info.tags = contactTags;

    console.log(info, " INFOs");

    return info;
  },

  getContactTags: async (id) => {
    const tags = ContactsManager.getContactTags(id);

    return tags;
  },

  addContactDescription: async (contactId, description) => {
    console.log(description, " this is desc");

    return await ContactsManager.addContactDescription(contactId, description);
  },

  addTag: async (tagId, contactId) => {
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
