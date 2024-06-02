interface Reminder {
  id: number;
  title: string;
  details: string;
  date: string;
}

interface ReminderListItem {
  reminder: Reminder;
  onPress: () => void;
}
