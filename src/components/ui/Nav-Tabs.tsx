import Button from "@/components/ui/Button";
import { Link, usePathname } from "expo-router";
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
        <Link key={index} href={item.path} asChild replace>
          <Button
            size="sm"
            onPress={() => {}}
            rounded
            variant={isActive(item.path) ? "primary" : "secondary"}
            title={item.title}
          />
        </Link>
      ))}
    </View>
  );
};

export default NavTab;
