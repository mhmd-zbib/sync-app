import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./Card";
import ProfilePicture from "./ProfilePicture";
import Typography from "../Typography";
import { useTheme } from "../../../stores/themeStore";

const ItemCard = ({
  name,
  rightInfo,
  onPress,
  selectMode,
  onLongPress,
  emoji,
  backgroundColor,
}) => {
  const { primary, textSecondary, accent } = useTheme();
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = useCallback(() => {
    onPress();
    if (selectMode) {
      setIsSelected(!isSelected);
    }
  }, [onPress, selectMode, isSelected]);

  const handleLongPress = useCallback(() => {
    setIsSelected(true);
    onLongPress();
  }, [onLongPress]);

  useEffect(() => {
    if (!selectMode) {
      setIsSelected(false);
    }
  }, [selectMode]);

  const icon = (
    <MaterialCommunityIcons
      name={
        isSelected ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"
      }
      size={26}
      color={isSelected ? primary : accent}
    />
  );

  const infoDisplay = selectMode ? (
    icon
  ) : (
    <Typography variant="sm" color={textSecondary}>
      {rightInfo}
    </Typography>
  );

  return (
    <Card onPress={handlePress} onLongPress={onLongPress && handleLongPress}>
      <View style={styles.container}>
        <ProfilePicture
          name={!emoji ? name : undefined}
          emoji={emoji}
          color={backgroundColor}
        />
        <Typography numberOfLines={1} style={styles.name}>
          {name}
        </Typography>
        <View style={styles.infoContainer}>{infoDisplay}</View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  name: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default ItemCard;
