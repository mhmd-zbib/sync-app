import { StyleSheet, View } from "react-native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../shared/stores/themeStore";

const ProfileTags = ({ tags }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {tags &&
        tags.map((tag, index) => (
          <Typography
            key={index}
            style={[
              styles.tag,
              {
                borderColor: theme.accent,
                borderWidth: 1,
                backgroundColor: theme.accent,
              },
            ]}>
            {tag}
          </Typography>
        ))}
    </View>
  );
};

export default ProfileTags;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
