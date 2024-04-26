import RemindersService from "../../services/ReminderService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddReminderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reminder) => RemindersService.createReminder(reminder),
    onSuccess: async () => queryClient.invalidateQueries("remindersList"),
  });
};
