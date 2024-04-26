/**
 *
 * @param {String} name
 *
 * @returns {String} initials of first letter of first two words
 * example: Mohammad Zbib => MZ
 */

export const useGetInitials = (name) => {
  const words = name.split(" ");
  let initials = words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return initials;
};
