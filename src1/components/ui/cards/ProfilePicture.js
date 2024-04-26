import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../text/Typography";
import { useGetInitials } from "../../../hooks/common/useGetInitials";
import Error from "../../layout/Error";
import Loading from "../../layout/Loading";

const ProfilePicture = ({ name, size = "md" }) => {
  const theme = useTheme();
  const sizeStyle = sizes[size] || sizes.medium;

  return (
    <View
      style={{
        backgroundColor: theme.accent,
        height: sizeStyle.height,
        width: sizeStyle.width,
        borderRadius: sizeStyle.width / 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Typography style={{ fontSize: sizeStyle.fontSize }}>
        {name ? useGetInitials(name) : <Loading />}
      </Typography>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});

const sizes = {
  sm: {
    height: 32,
    width: 32,
    fontSize: 12,
  },
  md: {
    height: 48,
    width: 48,
    fontSize: 18,
  },
  lg: {
    height: 80,
    width: 80,
    fontSize: 24,
  },
};
