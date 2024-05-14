import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import Card from "../../../../../shared/components/ui/cards/Card";
import { hexToRGBA } from "../../../../../shared/hooks/useHexToRgb";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../../../../shared/stores/themeStore";
import { View } from "react-native";

const TagItem = ({ item, onSelect, selectedId }) => {
  if (!item || item === null) return;
  const [selected, setSelected] = useState(selectedId);
  const { primary, textSecondary, accent } = useTheme();

  const handlePress = () => {
    setSelected(!selected);
    onSelect(item);
  };

  return (
    <Card
      onPress={handlePress}
      style={{
        flexDirection: "row",
        padding: 12,
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <Octicons
          name="tag"
          size={24}
          color={item.color}
          style={{
            backgroundColor: hexToRGBA(item.color, 0.12),
            padding: 8,
            borderRadius: 8,
          }}
        />
        <Typography color={item.color}>{item.name}</Typography>
      </View>

      <MaterialCommunityIcons
        name={
          selected ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"
        }
        size={26}
        color={selected ? primary : accent}
      />
    </Card>
  );
};

export default TagItem;
