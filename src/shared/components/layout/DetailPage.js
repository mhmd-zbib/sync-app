import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../stores/themeStore";
import GoBackButton from "../ui/buttons/GoBackButton";

const DetailPage = ({
  children,
  screenTitle,
  style,
  onOptionPress,
  onBackPress,
  deleteButton,
  onDelete,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerLeft: () => (
        <GoBackButton onPress={onBackPress ? onBackPress : navigation.goBack} />
      ),
      headerRight: () => (
        <>
          {deleteButton && (
            <MaterialCommunityIcons
              onPress={onDelete}
              name="trash-can-outline"
              size={24}
              color={"red"}
            />
          )}
          <Entypo
            onPress={onOptionPress}
            style={{ padding: 10, marginLeft: 10 }}
            name="dots-three-vertical"
            size={20}
            color={theme.primary}
          />
        </>
      ),
    });
  }, [navigation, screenTitle, deleteButton]);

  return <View style={[style, { flex: 1 }]}>{children}</View>;
};

export default DetailPage;

const styles = StyleSheet.create({});
