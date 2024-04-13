import { StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Button from "../../../components/buttons/Button";

const SectionPicker = ({ onChangeContent, activeContent }) => {
  const buttons = [
    { title: "All Connections", onPress: () => onChangeContent(0) },
    { title: "Groups", onPress: () => onChangeContent(1) },
    { title: "Starred", onPress: () => onChangeContent(2) },
    { title: "Tagged", onPress: () => onChangeContent(3) },
    { title: "un-Tagged", onPress: () => onChangeContent(4) },
  ];

  return (
    <ScrollView
      horizontal={true}
      contentOffset={{}}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {buttons.map((button, index) => (
        <Button
          style={{ marginHorizontal: 6 }}
          key={index}
          title={button.title}
          onPress={button.onPress}
          variant={index === activeContent ? "primary" : "secondary"}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  contentContainer: {
    alignItems: "center",
    paddingRight: 20,
  },
});

export default SectionPicker;
