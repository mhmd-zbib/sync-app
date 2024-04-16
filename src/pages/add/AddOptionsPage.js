import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddButton from "../../components/app/addOptions/addButton";
import Typography from "../../components/ui/text/Typography";
import { useNavigation } from "@react-navigation/native";

//Bottom sheet add component
const AddToSync = () => {
  const navigation = useNavigation();

  const handlePress = (screen) => () => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Typography variant="lg">Add to sync</Typography>
      <View style={styles.buttonsContainer}>
        <AddButton title="Connection" onPress={handlePress("AddConnection")} />
        <AddButton title="Reminder" onPress={handlePress("AddReminder")} />
        <AddButton title="Tag" onPress={handlePress("AddTag")} />
        <AddButton title="Group" onPress={handlePress("AddGroup")} />
      </View>
    </View>
  );
};

export default AddToSync;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
    marginBottom: 25,
  },
});
