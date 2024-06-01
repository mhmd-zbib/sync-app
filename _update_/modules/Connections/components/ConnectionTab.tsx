import React from "react";
import { View } from "react-native";
import ConnectionTabItem from "./ConnectionTabItem";

interface ConnectionListHeaderProps {
  filter: "all" | "tagged" | "starred";
  setFilter: (filter: "all" | "tagged" | "starred") => void;
}

const ConnectionListHeader: React.FC<ConnectionListHeaderProps> = ({
  filter,
  setFilter,
}) => {
  const buttonTitles = ["All", "Tagged", "Starred"];

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      {buttonTitles.map((title) => (
        <ConnectionTabItem
          key={title}
          title={title}
          onPress={() =>
            setFilter(title.toLowerCase() as "all" | "tagged" | "starred")
          }
          isActiveTab={filter === title.toLowerCase()}
        />
      ))}
    </View>
  );
};

export default ConnectionListHeader;
