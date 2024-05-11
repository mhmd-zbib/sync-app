import { View, Text } from "react-native";
import React from "react";
import Card from "../../../../../../shared/components/ui/cards/Card";
import Typography from "../../../../../../shared/components/ui/Typography";
import Separator from "../../../../../../shared/components/ui/Separator";
import { useTheme } from "../../../../../../shared/stores/themeStore";

const ProfileContainer = ({ label, data, onPress }) => {
  const theme = useTheme();

  return (
    <Card
      onPress={onPress}
      style={{
        gap: 16,
      }}>
      <Typography variant="al" fontWeight={500} color={theme.textSecondary}>
        {label}
      </Typography>

      <Separator />

      {!data && <Typography color={theme.textAccent}>Tap to add</Typography>}
      {typeof data === "string" && <Typography>{data}</Typography>}
      {typeof data !== "string" && data}
    </Card>
  );
};

export default ProfileContainer;
