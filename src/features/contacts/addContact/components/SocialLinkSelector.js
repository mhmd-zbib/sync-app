import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Typography from "../../../../components/ui/text/Typography";
import { useTheme } from "../../../../stores/shared/themeStore";

const SocialLinkSelector = ({ onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, { borderBottomColor: theme.accent }]}>
      <Typography variant="md" color={theme.textSecondary}>
        Platform
      </Typography>
      <Typography>Select</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    borderBottomWidth: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingBottom: 8,
    gap: 12,
  },
});

export default SocialLinkSelector;
