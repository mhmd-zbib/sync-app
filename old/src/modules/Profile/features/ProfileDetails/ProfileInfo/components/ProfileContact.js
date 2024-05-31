import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Typography from "../../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../../shared/stores/themeStore";
import Separator from "../../../../../../shared/components/ui/Separator";

const ProfileContact = ({ phone, email }) => {
  const theme = useTheme();

  if (!phone && !email) {
    return "";
  }

  return (
    <>
      {phone && (
        <View style={styles.cont}>
          <Typography color={theme.textAccent}>Phone</Typography>
          <Typography>{phone}</Typography>
        </View>
      )}
      {phone && email && <Separator />}
      {email && (
        <>
          <View style={styles.cont}>
            <Typography color={theme.textAccent}>Email</Typography>
            <Typography>{email}</Typography>
          </View>
        </>
      )}
    </>
  );
};

export default ProfileContact;

const styles = StyleSheet.create({
  cont: {
    gap: 4,
  },
});
