import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const useAddTagNavigation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add new tag",
    });
  }, [navigation]);
};

export default useAddTagNavigation;

const styles = StyleSheet.create({});
