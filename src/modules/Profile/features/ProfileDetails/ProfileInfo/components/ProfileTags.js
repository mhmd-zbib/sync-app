import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../../../../../shared/components/ui/Typography";
import { hexToRGBA } from "../../../../../../shared/hooks/useHexToRgb";
import { useTheme } from "../../../../../../shared/stores/themeStore";

const ProfileTags = ({ tags }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {tags &&
        tags.map((tag, index) => (
          <Typography
            key={index}
            color={tag.color}
            style={[
              styles.tag,
              {
                borderColor: tag.color,
                borderWidth: 1,
                backgroundColor: hexToRGBA(tag.color, 0.05),
              },
            ]}>
            {tag.name}
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
