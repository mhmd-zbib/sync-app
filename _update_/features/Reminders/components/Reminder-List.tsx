/**
 * Landing page of the application with the reminders
 * The header hides on scroll and reappears and works well
 */

import data from "@/__test__/data/Reminders.json";
import AnimatedHeader from "@/components/AnimatedHeader";
import SearchInput from "@/components/SearchInput";
import ThemedText from "@/components/ThemedText";
import { getMonthFromUnixTimestamp } from "@/utils/date-utils";
import { convertToSectionListFormat } from "@/utils/to-sectionlist";
import React from "react";
import { Animated, SectionList, View } from "react-native";
import ReminderListItem from "./Reminder-List-Item";
import { useTheme } from "@/hooks/useColorScheme";
import { useNavigation, router } from "expo-router";

const HEADER_HEIGHT = 70;
const ReminderList = () => {
  const sectionedListData = convertToSectionListFormat<Reminder>(data, (item) =>
    getMonthFromUnixTimestamp(item.date)
  );

  const navigation = useNavigation();
  const scrollY = new Animated.Value(0);
  const theme = useTheme();

  return (
    <>
      <AnimatedHeader scrollY={scrollY} headerHeight={HEADER_HEIGHT}>
        <SearchInput />
      </AnimatedHeader>

      <SectionList
        overScrollMode="never"
        alwaysBounceVertical={false}
        bouncesZoom={false}
        invertStickyHeaders
        stickyHeaderHiddenOnScroll={false}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginBottom: 8,
              marginTop: 24,
            }}>
            <ThemedText size={16} variant="accent">
              {title}
            </ThemedText>
            <View
              style={{
                backgroundColor: theme.accent,
                height: 1,
                width: "100%",
              }}
            />
          </View>
        )}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT - 24 }}
        sections={sectionedListData}
        renderItem={({ item }) => (
          <ReminderListItem
            reminder={item}
            onPress={() => {
              router.push("/contact/2");
            }}
          />
        )}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </>
  );
};

export default ReminderList;
