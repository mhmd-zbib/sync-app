import Button from "@/components/ui/Button";
import { Link, useLocalSearchParams, usePathname } from "expo-router";
import { View } from "react-native";

export const GroupTab = () => {
  const path = usePathname();
  const { id } = useLocalSearchParams();

  // Define the navigation items with their respective paths and titles
  const navItems = [
    { path: `/group/${id}`, title: "Info" },
    { path: `/group/${id}/notes`, title: "Notes" },
  ];

  // Function to determine if the current path is active
  const isActive = (navPath: string) => {
    return path === navPath;
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center",
      }}>
      {navItems.map((item, index) => (
        <Link key={index} href={item.path} asChild>
          <Button
            style={{}}
            rounded
            variant={isActive(item.path) ? "primary" : "secondary"}
            title={item.title}
          />
        </Link>
      ))}
    </View>
  );
};
