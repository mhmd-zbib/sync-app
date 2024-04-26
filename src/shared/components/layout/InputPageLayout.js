import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ScrollView, View } from "react-native";
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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerLeft: () => (
        <GoBackButton onPress={onBackPress || (() => navigation.goBack())} />
      ),
    });
  }, [navigation, screenTitle]);
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", paddingBottom: 25 }}>
      <ScrollView
        style={{
          gap: 32,
          paddingHorizontal: 10,
          marginBottom: 30,
          flex: 1,
        }}>
        {children}
      </ScrollView>

      <Button
        disabled={disabled}
        style={{ marginHorizontal: 10 }}
        title={buttonTitle}
        onPress={onPress}
      />
    </View>
  );
};

export default InputPageLayout;
