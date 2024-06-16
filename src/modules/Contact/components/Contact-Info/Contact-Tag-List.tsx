import { View } from "react-native";
import ContactTagItem from "./Contact-Tag-Item";
import EmptyComponent from "./Empty-Component";

interface ContactTagListProps {
  tags: any[];
}

export const ContactTagList = ({ tags }: ContactTagListProps) => {
  if (!tags || tags.length === 0) {
    return <EmptyComponent />;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        flexWrap: "wrap",
      }}>
      {tags.map((tag) => (
        <ContactTagItem tag={tag} />
      ))}
    </View>
  );
};
