import { dbManager } from "../utils";

class TagsManager {
  async createTag(tagName) {
    console.log(tagName, "YOYO");
    return dbManager.createSQL("INSERT INTO tags (name) VALUES (?);", [
      tagName,
    ]);
  }

  getAllTags() {
    return dbManager.readSQL("SELECT * FROM tags;");
  }
}

export default new TagsManager();
