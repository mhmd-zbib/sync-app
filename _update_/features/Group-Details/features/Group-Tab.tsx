import Button from "@/components/Button";
import React from "react";
import { View } from "react-native";
import { GroupTabs } from "../types/enums";

interface GroupTabProps {
  tab: GroupTabs;
  setTab: (tab: GroupTabs) => void;
}

const GroupTab = ({ tab, setTab }: GroupTabProps) => {
  const buttonTitles: GroupTabs[] = [
    // GroupTabs.Description,
    GroupTabs.Connections,
    GroupTabs.Note,
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-start",
      }}>
      {buttonTitles.map((title) => (
        <Button
          key={title}
          title={title}
          onPress={() => setTab(title)}
          variant={tab === title ? "primary" : "secondary"}
          rounded
        />
      ))}
    </View>
  );
};

export default GroupTab;
