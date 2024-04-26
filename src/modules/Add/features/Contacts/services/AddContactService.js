/**
 *
 * Handles the post req of contact to the local database
 *
 * @param {Object} contactInfo Pass contact info as object with: name, reminder freq, phone num, email, social
 */

export default async function AddContactService(contactInfo) {
  console.log(contactInfo);

  //   const contactResult = await dbManager.createSQL(
  //     "INSERT INTO connections (name, email, phone_number, created_at) VALUES (?, ?, ?, ?);",
  //     [name, email, phoneNumber, timestamp]
  //   );
}
