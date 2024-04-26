import { StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import Button from "../../../shared/components/ui/buttons/Button";

const SectionList = ({ onChangeContent, activeContent }) => {
  const buttons = [
    { title: "All Connections", onPress: () => onChangeContent(0) },
    { title: "Groups", onPress: () => onChangeContent(1) },
    { title: "Starred", onPress: () => onChangeContent(2) },
    { title: "Tagged", onPress: () => onChangeContent(3) },
    { title: "un-Tagged", onPress: () => onChangeContent(4) },
  ];

  return (
    <View>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        {buttons.map((button, index) => (
          <Button
            size="sm"
            style={{ marginHorizontal: 6 }}
            key={index}
            title={button.title}
            onPress={button.onPress}
            variant={index === activeContent ? "primary" : "secondary"}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  contentContainer: {
    alignItems: "center",
    paddingRight: 20,
  },
});

export default SectionList;
