import ContactsManager from "../core/database/databaseServices/ContactsManager";

const ContactsService = {
  createContact: async (name, email, phoneNumber, tags) => {
    return ContactsManager.createContact(name, email, phoneNumber, tags);
  },

  getAllContacts: async () => {
    return ContactsManager.getAllContacts();
  },

  getTaggedContacts: async (tag) => {
    return ContactsManager.getTaggedContacts(tag);
  },
};

export default ContactsService;
