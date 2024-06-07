import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";

const ContactTagsScreen = () => {
  // const navigation = useNavigation();
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "My Contact Tags",
  //   });
  // }, [navigation]);

  return (
    <View>
      <Text>ContactTagsScreen</Text>
    </View>
  );
};

export default ContactTagsScreen;
