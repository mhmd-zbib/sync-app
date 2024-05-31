/**
 * @param {Array} id - array of the contacts ID for deleting
 */

export default function useDeleteGroupContact() {
  const deleteContacts = (id) => {
    console.log(id);
  };

  return { deleteContacts };
}
