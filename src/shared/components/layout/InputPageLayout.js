import React, { useLayoutEffect } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../ui/buttons/Button";
import GoBackButton from "../ui/buttons/GoBackButton";

const InputPageLayout = ({
  children,
  onPress,
  buttonTitle,
  screenTitle,
  onBackPress,
  disabled = false,
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  const keyboardVerticalOffset = 0.1 * screenHeight + 5;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerLeft: () => (
        <GoBackButton onPress={onBackPress || (() => navigation.goBack())} />
      ),
    });
  }, [navigation, screenTitle, onBackPress]);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      // enabled={true}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 25,
      }}>
      <View style={{ gap: 26, paddingHorizontal: 10, marginBottom: 30 }}>
        {children}
      </View>

      <Button
        disabled={disabled}
        style={{ marginHorizontal: 10 }}
        title={buttonTitle}
        onPress={onPress}
      />
    </KeyboardAvoidingView>
  );
};

export default InputPageLayout;
