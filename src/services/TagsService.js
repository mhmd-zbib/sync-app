import TagsManager from "../core/database/databaseServices/TagsManager";

const TagsService = {
  getTags: async () => {
    return TagsManager.getAllTags();
  },

  addTag: async (tagName) => {
    console.log("here adding", tagName);
    if (!tagName || tagName.trim("") === "") {
      return;
    }

    return TagsManager.createTag(tagName);
  },
};

export default TagsService;
