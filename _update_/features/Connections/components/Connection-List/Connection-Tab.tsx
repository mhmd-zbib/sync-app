/**
 * Render of ConnectionTabItem were it maps the buttons
 * Controls the filter options of the ConnectionList
 */

import React from "react";
import ConnectionTabItem from "./Connection-Tab-Item";
import { View } from "react-native";
import { FilterOptions } from "../../types/enums";
import { ConnectionListHeaderProps } from "../../types/interfaces";

const ConnectionListHeader: React.FC<ConnectionListHeaderProps> = ({
  filter,
  setFilter,
}) => {
  const buttonTitles: FilterOptions[] = [
    FilterOptions.All,
    FilterOptions.Tagged,
    FilterOptions.Starred,
  ];

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      {buttonTitles.map((title) => (
        <ConnectionTabItem
          key={title}
          title={title}
          onPress={() => setFilter(title)}
          isActiveTab={filter === title}
        />
      ))}
    </View>
  );
};

export default ConnectionListHeader;
