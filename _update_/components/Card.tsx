import ThemedView from "@/components/ThemedView";
import {
  GestureResponderEvent,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface CardProps {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: ViewStyle;
}

export const Card = ({ children, onPress, style }: CardProps) => {
  return (
    <ThemedView style={[{ borderRadius: 16 }, style]} color="secondary">
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ padding: 16 }}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </ThemedView>
  );
};
