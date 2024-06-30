import Button from "@/components/ui/Button";
import React from "react";
import { View } from "react-native";
import WithMoneyButton from "./withAuth";

const Person1 = ({ money, addMoney }: any) => {
  return (
    <View>
      <Button title={`you got ${money}$`} onPress={addMoney} />
    </View>
  );
};

export default WithMoneyButton(Person1);
