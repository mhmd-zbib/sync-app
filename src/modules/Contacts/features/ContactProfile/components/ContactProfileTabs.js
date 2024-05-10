import React from "react";
import { StyleSheet } from "react-native";
import { SceneMap } from "react-native-tab-view";
import TabSlides from "../../../../../shared/components/ui/TabView";
import GroupNoteTab from "../../../../Groups/features/GroupNotes";
import ContactInfo from "../../ContactInfo";

const renderScene = SceneMap({
  first: ContactInfo,
  second: GroupNoteTab,
});

const ContactProfileTabs = () => {
  const [routes] = React.useState([
    { key: "first", title: "Contacts" },
    { key: "second", title: "Notes" },
  ]);

  return <TabSlides routes={routes} renderScene={renderScene} />;
};

export default ContactProfileTabs;

const styles = StyleSheet.create({});
