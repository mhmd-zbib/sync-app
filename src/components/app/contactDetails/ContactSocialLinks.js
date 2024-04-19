import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import Typography from "../../ui/text/Typography";
import { useContactDetailsStore } from "../../../stores/contacts/useContactDetailsStore";
import { useTheme } from "../../../stores/shared/themeStore";

const ContactSocialLinks = () => {
  const { socialLinks } = useContactDetailsStore(
    (state) => state.contactDetails
  );

  const handlePress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const theme = useTheme();
  return (
    <View style={styles.container}>
      {socialLinks.map((link, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(link.url)}
          style={[styles.linkContainer]}>
          <Typography variant="sm" color={theme.background} fontWeight={600}>
            {link.platform[0]}
          </Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContactSocialLinks;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 10,
    marginTop: 18,
    marginBottom: 5,
  },
  linkContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  linkText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
