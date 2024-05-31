import { useNavigation } from "@react-navigation/native";
import React from "react";
import ContactItem from "../../Contacts/features/ContactList/components/ContactItem";
import GroupItem from "../../Groups/features/GroupList/components/GroupItem";
import Loading from "../../../shared/components/layout/Loading";

const categoryConfig = {
  contacts: {
    component: ContactItem,
    navigationPath: "ContactProfileScreen",
  },
  groups: {
    component: GroupItem,
    navigationPath: "GroupDetailsScreen",
  },
};

const ConnectionsItem = ({
  item,
  category,
  isLoading,
  selectMode,
  onLongPress,
}) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    const config = categoryConfig[category];
    if (config) {
      return navigation.navigate(config.navigationPath, { id: item.id });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const ItemComponent = categoryConfig[category]?.component;

  return ItemComponent ? (
    <ItemComponent
      onLongPress={onLongPress}
      item={item}
      onPress={() => handlePress(item)}
      selectMode={selectMode}
    />
  ) : null;
};

export default ConnectionsItem;
