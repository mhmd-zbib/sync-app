/**
 * Render of ConnectionTabItem were it maps the buttons
 * Controls the filter options of the ConnectionList
 */

import Button from "@/components/Button";
import React from "react";
import { ScrollView, View } from "react-native";
import { FilterOptions } from "../../types/enums";
import { ConnectionListHeaderProps } from "../../types/interfaces";

const ConnectionListHeader: React.FC<ConnectionListHeaderProps> = ({
  filter,
  setFilter,
}) => {
  const buttonTitles: FilterOptions[] = [
    FilterOptions.All,
    FilterOptions.Group,
    FilterOptions.Tagged,
    FilterOptions.Starred,
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ gap: 10, flexDirection: "row" }}>
        {buttonTitles.map((title) => (
          <Button
            key={title}
            title={title}
            onPress={() => setFilter(title)}
            variant={filter === title ? "primary" : "secondary"}
            rounded
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ConnectionListHeader;
