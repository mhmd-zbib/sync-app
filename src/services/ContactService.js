import ContactsManager from "../core/database/databaseServices/ContactsManager";

const ContactsService = {
  createContact: async (contactData) => {
    console.log(contactData);
    const { name, email, phoneNumber, tags } = contactData;

    if (!name) return;

    return ContactsManager.createContact(name, email, phoneNumber, tags);
  },

  getAllContacts: async () => {
    return await ContactsManager.getAllContacts();
  },

  getTaggedContacts: async (tag) => {
    return ContactsManager.getTaggedContacts(tag);
  },
};

export default ContactsService;
