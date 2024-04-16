import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("syncapp.db");

const ContactsService = {
  createContact: async (name, email, phoneNumber, tags, callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO connections (name, email, phone_number, tags) VALUES (?, ?, ?, ?);`,
        [name, email, phoneNumber, tags],
        (_, result) => callback(null, result),
        (_, error) => callback(error)
      );
    });
  },
  getAllContacts: async () => {},
  getTaggedContacts: async (reminderId) => {},
};
export default ContactsService;
