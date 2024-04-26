import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../components/ui/text/Typography";

const DetailsReminderPage = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Typography>{item.name} .</Typography>
    </View>
  );
};

export default DetailsReminderPage;

const styles = StyleSheet.create({});
