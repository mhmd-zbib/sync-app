import React from "react";
import {
  GestureResponderEvent,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import Button from "../ui/Button";

interface FormLayoutType extends ViewProps {
  children: React.ReactNode;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const FormLayout = ({ children, onPress, ...props }: FormLayoutType) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          marginVertical: 20,
        }}>
        <ScrollView>
          <View style={{ gap: 30 }} {...props}>
            {children}
          </View>
        </ScrollView>
        <Button title="Submit" onPress={onPress} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormLayout;
