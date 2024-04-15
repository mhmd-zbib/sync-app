import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddButton from "./components/addButton";
import Typography from "../../components/Text.js/Typography";
import { useNavigation } from "@react-navigation/native";

const AddToSync = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Typography variant="lg">Add to sync</Typography>

      <View
        style={{
          flexDirection: "row",
          gap: 8,
          marginTop: 12,
          marginBottom: 25,
        }}>
        <AddButton
          title={"Connection"}
          onPress={() => {
            navigation.navigate("AddReminder");
          }}
        />
        <AddButton title={"Reminder"} />
        <AddButton title={"Tag"} />
        <AddButton title={"Group"} />
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
    flexWrap: "wrap",
  },
  button: {
    width: "48%",
    margin: "1%",
  },
});
