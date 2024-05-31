import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Typography from "../../shared/components/ui/Typography";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../shared/stores/themeStore";

const AddButton = ({ title, icon, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flex: 1,
        alignItems: "center",
        gap: 8,
        backgroundColor: theme.accent,
        borderRadius: 16,
        paddingVertical: 16,
      }}>
      <Typography variant="sm">{title}</Typography>
    </TouchableOpacity>
  );
};

const AddOptionsScreen = () => {
  const navigation = useNavigation();
  const handlePress = (screen) => () => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Typography variant="lg">Add to sync</Typography>
      <View style={{ gap: 4, marginBottom: 24, marginTop: 8 }}>
        <View style={styles.buttonsContainer}>
          <AddButton
            title="Connection"
            onPress={handlePress("ContactAddScreen")}
          />
          <AddButton title="Reminder" onPress={handlePress("AddReminder")} />
        </View>
        <View style={styles.buttonsContainer}>
          <AddButton title="Tag" onPress={handlePress("AddTag")} />
          <AddButton title="Group" onPress={handlePress("GroupAddScreen")} />
        </View>
      </View>
    </View>
  );
};

export default AddOptionsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  buttonsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 4,
  },
});
