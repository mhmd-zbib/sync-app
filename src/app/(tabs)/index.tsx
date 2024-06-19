import reminders from "@/__test__/data/Reminders.json";
import SearchInput from "@/components/SearchInput";
import ReminderScreenHeader from "@/modules/Reminders/components/Reminder-Screen-Header";
import ReminderList from "@/modules/Reminders/features/Reminder-List";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, marginTop: 10, marginHorizontal: 10, gap: 10 }}>
      <ReminderScreenHeader />
      <SearchInput />
      <ReminderList data={reminders} />
    </View>
  );
}
