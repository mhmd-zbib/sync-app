import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Typography from "../../components/ui/text/Typography";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/buttons/Button";

const useListTagsNavigation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title={"Add new"}
          size="sm"
          variant="accent"
          rounded
          onPress={() => {
            navigation.navigate("AddTag");
          }}
        />
      ),
    });
  }, [navigation]);
};

export default useListTagsNavigation;

const styles = StyleSheet.create({});
