import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const DetailPage = ({ children, screenTitle, style, onOptionPress }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerRight: () => (
        <TouchableOpacity
          onPress={onOptionPress}
          activeOpacity={0.6}
          style={{ padding: 10 }}>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, screenTitle]);

  return <View style={[style, { flex: 1 }]}>{children}</View>;
};

export default DetailPage;

const styles = StyleSheet.create({});
