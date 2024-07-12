import { View, Text } from "react-native";
import React from "react";
import { LineGraph } from "@/components/ui/Line-Graph";
import DashboardContainer from "@/components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";

const ContactsCreated = () => {
  const dummy = [1, 5, 6, 7, 3, 2, 1];

  return (
    <DashboardContainer>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DashboardTitle title="Created this week" value={2} />
        <DashboardTitle title="This month" value={10} />
      </View>
      <LineGraph data={dummy} />
    </DashboardContainer>
  );
};

export default ContactsCreated;
