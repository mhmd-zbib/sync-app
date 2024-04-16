import ContactsManager from "../core/database/databaseServices/ContactsManager";

const ContactsService = {
  createContact: async (contactData) => {
    const { name, email, phoneNumber, tags } = contactData;
    console.log("creating");
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
