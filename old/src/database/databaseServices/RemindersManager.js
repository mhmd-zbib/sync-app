import { dbManager } from "../utils";

class RemindersManager {
  async createReminder(name, time, description, isDone = false) {
    const date = new Date();
    const timestamp = date.getTime();
    return dbManager.createSQL(
      "INSERT INTO reminders (name, time, description, isDone, created_at) VALUES (?,?,?,?,?)",
      [name, time, description, isDone, timestamp]
    );
  }

  async getUndoneReminders() {
    console.log("fetching reminders....");
    return dbManager.readSQL("SELECT name FROM reminders;");
  }

  async deleteReminder(id) {
    return dbManager.createSQL("DELETE FROM reminder WHERE id = ?", [id]);
  }
}

export default new RemindersManager();
