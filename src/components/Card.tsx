import ThemedView from "@/components/ThemedView";
import { GestureResponderEvent, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: ViewStyle;
}

export const Card = ({ children, onPress, style, ...props }: CardProps) => {
  return (
    <ThemedView
      onPress={onPress}
      style={[
        { borderRadius: 16, paddingHorizontal: 16, paddingVertical: 16 },
        style,
      ]}
      color="secondary">
      {children}
    </ThemedView>
  );
};
