import ThemedText from "@/components/ThemedText";
import GroupContact from "@/modules/Group/features/Group-Members";
import GroupHeader from "@/modules/Group/features/Group-Header";
import GroupTab from "@/modules/Group/features/Group-Tab";
import { GroupTabs } from "@/modules/Group/types/enums";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import Notes from "@/modules/Notes/features/Notes";

const GroupScreen = () => {
  const [tab, setTab] = useState<GroupTabs>(GroupTabs.Connections);
  const tabComponents = useMemo(
    () => ({
      // [GroupTabs.Description]: <GroupDescription />,
      [GroupTabs.Connections]: <GroupContact />,
      [GroupTabs.Note]: <Notes />,
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
