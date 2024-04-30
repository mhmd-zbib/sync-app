/**
 *
 * This service handles the adding of contact to the local database
 * @param {Object} contactInfo Pass contact info as object with: name, reminder freq, phone num, email, social
 */

import { dbManager } from "../../../../../database/utils";

export default async function AddContactService(formData) {
  const { name, phoneNumber, email, timestamp } = formData;

  const contact = await dbManager.createSQL(
    "INSERT INTO connections (name, email, phone_number, created_at) VALUES (?, ?, ?, ?);",
    [name, email, phoneNumber, timestamp]
  );

  console.log(contact, "data");

  const contactId = contact.insertId;
  return contactId;
}
