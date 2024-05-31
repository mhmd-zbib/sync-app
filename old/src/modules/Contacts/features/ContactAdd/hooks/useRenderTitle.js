/**
 *
 * @param {Number} step
 * @returns {String} screen title
 */

export default function useAddContactScreenName(step) {
  switch (step) {
    case 0:
      return "Profile Info";
    case 1:
      return "Contact Info";
    case 2:
      return "Social";
  }
}
