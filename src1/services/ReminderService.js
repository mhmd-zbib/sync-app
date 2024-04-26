import RemindersManager from "../core/database/databaseServices/RemindersManager";

const RemindersService = {
  createReminder: async (reminderData) => {
    const { name, description, time, tags } = reminderData;
    console.log(reminderData);
    return RemindersManager.createReminder(name, time, description, tags);
  },

  getUndoneReminders: async () => {
    return RemindersManager.getUndoneReminders();
  },

  getContactReminders: async () => {},
  getAllReminders: async () => {},
};
export default RemindersService;
