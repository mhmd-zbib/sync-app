import ThemedView from "@/components/ThemedView";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

interface CardProps {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export const Card = ({ children, onPress }: CardProps) => {
  return (
    <ThemedView style={{ borderRadius: 16 }} color="secondary">
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ padding: 16 }}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </ThemedView>
  );
};
