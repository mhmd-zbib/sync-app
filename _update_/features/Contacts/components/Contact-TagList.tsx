import ThemedText from "@/components/ThemedText";
import { View } from "react-native";

interface TagsType {
  name: string;
  id: number;
  color: string;
}

interface ContactTagListProps {
  tags: TagsType[];
}

export const ContactTagList = ({ tags }: ContactTagListProps) => {
  if (!tags || tags.length === 0) {
    return <ThemedText>No tags</ThemedText>;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        flexWrap: "wrap",
      }}>
      {tags.map((tag) => (
        <ThemedText
          style={{
            backgroundColor: tag.color,
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 6,
          }}>
          {tag.name}
        </ThemedText>
      ))}
    </View>
  );
};
