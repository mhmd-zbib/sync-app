import { useNavigation } from "@react-navigation/native";
import React from "react";
import ContactItem from "../../Contacts/features/ContactList/components/ContactItem";
import GroupItem from "../../Groups/features/GroupList/components/GroupItem";

const categoryConfig = {
  contacts: {
    component: ContactItem,
    navigationPath: "ContactProfileScreen",
  },
  groups: {
    component: GroupItem,
    navigationPath: "ContactProfileScreen",
  },
};

const ConnectionsItem = ({ item, category, isLoading }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    console.log(item, category);
    const config = categoryConfig[category];
    if (config) {
      navigation.navigate(config.navigationPath, { id: item.id });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const ItemComponent = categoryConfig[category]?.component;

  return ItemComponent ? (
    <ItemComponent item={item} onPress={() => handlePress(item)} />
  ) : null;
};

export default ConnectionsItem;
