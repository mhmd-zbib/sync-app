import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import Button from "../ui/buttons/Button";
import GoBackButton from "../ui/buttons/GoBackButton";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../stores/themeStore";

const InputPageLayout = ({
  children,
  onPress,
  buttonTitle,
  screenTitle,
  onBackPress,
  disabled = false,
  headerRight,
  addButton = false,
  onAddPress,
  style,
  deleteButton,
  onDelete,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();
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
        return (
          <View style={{ gap: 25, flexDirection: "row" }}>
            {deleteButton && (
              <MaterialCommunityIcons
                onPress={onDelete}
                name="trash-can-outline"
                size={26}
                color={"red"}
              />
            )}
            {addButton && (
              <AntDesign
                onPress={onAddPress}
                name="pluscircle"
                size={26}
                color={theme.primary}
              />
            )}

            {headerRight}
          </View>
        );
      },
    });
  }, [navigation, screenTitle, onBackPress]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 25,
      }}>
      <ScrollView>
        <View
          style={[
            { gap: 26, paddingHorizontal: 10, marginBottom: 20, flex: 1 },
            style,
          ]}>
          {children}
        </View>
      </ScrollView>

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
