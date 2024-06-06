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

interface ContactReminderType {
  id: number;
  title: string;
  date: number;
}
