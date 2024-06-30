import { View, Text } from "react-native";
import React from "react";
import RingProgress from "@/components/ui/Ring-Graph";

const RemindersCompleted = () => {
  return (
    <View>
      <RingProgress progress={50} total={180} />
    </View>
  );
};

export default RemindersCompleted;
