import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Typography from "../../../../components/ui/text/Typography";

const useContactDetailsLayout = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Profile",

      headerRight: () => (
        <TouchableOpacity activeOpacity={0.8}>
          <Typography>Dropdown</Typography>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
};

export default useContactDetailsLayout;

const styles = StyleSheet.create({});
