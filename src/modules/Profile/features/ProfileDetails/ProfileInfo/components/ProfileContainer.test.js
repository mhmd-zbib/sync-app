import { View, Text } from "react-native";
import React from "react";
import Card from "../../../../../../shared/components/ui/cards/Card";
import Typography from "../../../../../../shared/components/ui/Typography";
import Separator from "../../../../../../shared/components/ui/Separator";

const ProfileContainerTest = ({ label, data }) => {
  return (
    <Card
      style={{
        gap: 16,
      }}>
      <Typography variant="x" fontWeight={500}>
        {label}
      </Typography>
      <Separator />
      <Typography>{data}</Typography>
    </Card>
  );
};

export default ProfileContainerTest;
