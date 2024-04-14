import { getRealm } from "../database/dataBaseConfig";

const realm = getRealm();

const ContactsService = {
  getAllContacts: () => {
    return realm.objects("Contact");
  },

  addContact: (contact) => {
    realm.write(() => {
      realm.create("Contact", contact);
    });
  },

  getContactById: (contactId) => {
    return realm.objectForPrimaryKey("Contact", contactId);
  },

  updateContact: (contactId, newData) => {
    realm.write(() => {
      let updatingContact = realm.objectForPrimaryKey("Contact", contactId);
      Object.keys(newData).forEach((key) => {
        updatingContact[key] = newData[key];
      });
    });
  },

  deleteContact: (contactId) => {
    realm.write(() => {
      let deletingContact = realm.objectForPrimaryKey("Contact", contactId);
      realm.delete(deletingContact);
    });
  },
};

export default ContactsService;
