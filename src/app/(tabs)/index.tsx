import reminders from "@/__test__/data/Reminders.json";
import SearchInput from "@/components/SearchInput";
import ReminderList from "@/modules/Reminders/features/Reminder-List";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ gap: 10, flex: 1, marginTop: 10 }}>
      <SearchInput />
      <ReminderList data={reminders} />
    </View>
  );
}
