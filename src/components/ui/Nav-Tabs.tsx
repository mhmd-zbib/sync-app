import Button from "@/components/ui/Button";
import { Link, router, usePathname } from "expo-router";
import React from "react";
import { View } from "react-native";
import ThemedText from "./ThemedText";

type NavItem = {
  path: string;
  title: string;
};

type GroupTabProps = {
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  navItems: NavItem[];
};

const NavTab: React.FC<GroupTabProps> = ({
  navItems,
  justifyContent = "space-between",
  ...props
}) => {
  const path = usePathname();

  const isActive = (navPath: string) => {
    return path === navPath;
  };

  return (
    <View
      {...props}
      style={{
        flexDirection: "row",
        justifyContent,
        alignItems: "center",
        gap: justifyContent === "flex-start" ? 20 : 0,
      }}>
      {navItems.map((item, index) => (
        <Button
          key={index}
          onPress={() => {
            router.replace(item.path);
          }}
          rounded
          variant={isActive(item.path) ? "primary" : "secondary"}
          title={item.title}
        />
      ))}
    </View>
  );
};

export default NavTab;
