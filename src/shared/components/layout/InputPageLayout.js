import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Dimensions, KeyboardAvoidingView, Platform, View } from "react-native";
import Button from "../ui/buttons/Button";
import GoBackButton from "../ui/buttons/GoBackButton";

const InputPageLayout = ({
  children,
  onPress,
  buttonTitle,
  screenTitle,
  onBackPress,
  disabled = false,
  headerRight,
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  const keyboardVerticalOffset =
    Platform.OS === "ios" ? 0.1 * screenHeight + 5 : 0;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerLeft: () => (
        <GoBackButton onPress={onBackPress || (() => navigation.goBack())} />
      ),

      headerRight: () => {
        {
          return headerRight;
        }
      },
    });
  }, [navigation, screenTitle, onBackPress]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      // enabled={true}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 25,
      }}>
      <View
        style={{ gap: 26, paddingHorizontal: 10, marginBottom: 10, flex: 1 }}>
        {children}
      </View>

      <Button
        arrow
        disabled={disabled}
        style={{ marginHorizontal: 10 }}
        title={buttonTitle}
        onPress={onPress}
      />
    </KeyboardAvoidingView>
  );
};

export default InputPageLayout;
