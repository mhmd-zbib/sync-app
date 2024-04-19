import ContactsManager from "../core/database/databaseServices/ContactsManager";

const ContactsService = {
  createContact: async (contactData) => {
    console.log(contactData);
    const { name, email, phoneNumber, links } = contactData;

    if (!name) return;

    return ContactsManager.createContact(name, email, phoneNumber, links);
  },

  addContactDescription: async (id, description) => {
    console.log(id, description);
    return await ContactsManager.addContactDescription(id, description);
  },

  getAllContacts: async () => {
    return await ContactsManager.getAllContacts();
  },

  getContactDetails: async (id) => {
    let info = {};
    const details = await ContactsManager.getContactDetails(id);
    const socialLinks = await ContactsManager.getContactSocialLinks(id);
    console.log(info, "infos");
    info = details[0];
    info.socialLinks = socialLinks;
    return info;
  },

  getTaggedContacts: async (tag) => {
    return ContactsManager.getTaggedContacts(tag);
  },
};

export default ContactsService;
