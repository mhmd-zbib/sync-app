import reminders from "@/__test__/data/Reminders.json";
import ProgressBar from "@/components/Progress-Bar";
import SearchInput from "@/components/SearchInput";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import ReminderList from "@/modules/Reminders/components/Reminder-List";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const RemindersScreenLayout = () => {
  const theme = useTheme();

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ flex: 1 }}
      stickyHeaderHiddenOnScroll>
      <View style={styles.headerContainer}>
        <SearchInput />
      </View>
      <ReminderList
        data={reminders}
        onScroll={(e) => {
          e.nativeEvent;
        }}
      />
    </ScrollView>
  );
};

export default RemindersScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  reminderGoalsContainer: {
    flexDirection: "row",
    borderRadius: 200,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  reminderGoalsTextContainer: {
    width: "50%",
    gap: 4,
    position: "absolute",
    left: "25%",
  },
});
