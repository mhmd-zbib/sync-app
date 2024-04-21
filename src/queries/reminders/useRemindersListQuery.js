import { useQuery } from "@tanstack/react-query";
import RemindersService from "../../services/ReminderService";

export const useRemindersListQuery = () => {
  return useQuery({
    queryKey: ["remindersList"],
    queryFn: () => RemindersService.getUndoneReminders(),
    onError: (error) => console.error("Failed to fetch reminders:", error),
  });
};
