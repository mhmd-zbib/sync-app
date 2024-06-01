interface Reminder {
  title: string;
  details: string;
  date: number | string;
}

interface ReminderListItem {
  reminder: Reminder;
  onPress: (event: Event) => void;
}
