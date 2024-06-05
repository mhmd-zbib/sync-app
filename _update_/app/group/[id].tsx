import ThemedText from "@/components/ThemedText";
import GroupContact from "@/features/Group-Details/features/Group-Contact";
import GroupHeader from "@/features/Group-Details/features/Group-Header";
import GroupTab from "@/features/Group-Details/features/Group-Tab";
import { GroupTabs } from "@/features/Group-Details/types/enums";
import React, { useMemo, useState } from "react";
import { View } from "react-native";

const GroupScreen = () => {
  const [tab, setTab] = useState<GroupTabs>(GroupTabs.Connections);
  const tabComponents = useMemo(
    () => ({
      // [GroupTabs.Description]: <GroupDescription />,
      [GroupTabs.Connections]: <GroupContact />,
      [GroupTabs.Note]: <ThemedText>hei</ThemedText>,
    }),
    []
  );

  return (
    <View style={{ paddingHorizontal: 10, gap: 16, flex: 1 }}>
      <GroupHeader />
      <GroupTab tab={tab} setTab={setTab} />
      {tabComponents[tab]}
    </View>
  );
};

export default GroupScreen;
