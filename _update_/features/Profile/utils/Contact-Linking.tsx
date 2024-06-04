import { Linking, Platform } from "react-native";

export const handleOpenLink = (link: string) => {
  return Linking.canOpenURL(link).then((supported) => {
    if (supported) {
      if (Platform.OS === "android") {
        return Linking.openURL(link);
      } else {
        return Linking.openURL(link);
      }
    } else {
      console.log(`Cannot open URL: ${link}`);
      return openWebsite(link);
    }
  });
};

const openWebsite = (link: string) => {
  return Linking.openURL(link).catch((err) =>
    console.error("An error occurred", err)
  );
};
