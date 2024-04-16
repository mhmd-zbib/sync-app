import * as SQLite from "expo-sqlite";

class ContactsManager {
  db = SQLite.openDatabase("syncapp.db");

  async createContact(name, email, phoneNumber, tags) {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO connections (name, email, phone_number, tags) VALUES (?, ?, ?, ?);",
          [name, email, phoneNumber, tags],
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
  }

  async getAllContacts() {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM connections;",
          [],
          (_, result) => {
            console.log(result.rows._array, " hi");
            // resolve(result.rows._array._j);
          },
          (_, error) => reject(error)
        );
      });
    });
  }

  async getTaggedContacts(tag) {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM connections WHERE tags LIKE ?;",
          [`%${tag}%`],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }
}

export default new ContactsManager();
