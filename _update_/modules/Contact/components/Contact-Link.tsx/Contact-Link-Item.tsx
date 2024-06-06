import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/useColorScheme";
import { handleOpenLink } from "../../utils/Contact-Linking";

interface ContactLinksProps {
  iconName: string;
  link: string;
}

const ContactLinksItem: React.FC<ContactLinksProps> = ({ iconName, link }) => {
  const theme = useTheme();

  const onPressHandler = () => {
    handleOpenLink(link);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ marginRight: 20, marginVertical: 5 }}
      onPress={onPressHandler}>
      <FontAwesome6 name={iconName} size={24} color={theme.primary} />
    </TouchableOpacity>
  );
};

export default ContactLinksItem;
