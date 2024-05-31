import { Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import { hexToRGBA } from "../../../../shared/hooks/useHexToRgb";
import { useTheme } from "../../../../shared/stores/themeStore";
import useAddTagMutation from "../../queries/useAddTagMutation";

const tagColors = {
  red: "#FF0000",
  blue: "#2986CC",
  green: "#8fce00",
  yellow: "#f1c232",
  teal: "#00b894",
  purple: "#674ea7",
  orange: "#e67e22",
};
const TagAddScreen = () => {
  const [color, setSelectedColor] = React.useState(tagColors.orange);
  const [name, setTagName] = React.useState("");

  const { mutate } = useAddTagMutation();

  return (
    <InputPageLayout
      disabled={!name.trim()}
      onPress={() => mutate({ name, color })}
      buttonTitle={"Add"}
      screenTitle={"Add New Tag"}
      style={{ gap: 25 }}>
      <Octicons
        name="tag"
        size={50}
        color={color}
        style={{
          alignSelf: "center",
          backgroundColor: hexToRGBA(color, 0.15),
          padding: 30,
          borderRadius: 500,
        }}
      />

      <InputText label="Tag Name" value={name} onChange={setTagName} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        {Object.keys(tagColors).map((tagName, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedColor(tagColors[tagName])}
            key={index}
            style={{
              backgroundColor: tagColors[tagName],
              width: 40,
              height: 40,
              borderRadius: 800,
            }}
          />
        ))}
      </View>
    </InputPageLayout>
  );
};

export default TagAddScreen;
