import ThemedView from "@/components/ThemedView";
import { GestureResponderEvent, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: ViewStyle;
  disabled?: boolean;
}

export const Card = ({
  children,
  onPress,
  style,
  disabled,
  ...props
}: CardProps) => {
  return (
    <ThemedView
      disabled={disabled}
      {...props}
      onPress={onPress}
      style={[{ borderRadius: 16, padding: 16 }, style]}
      color="secondary">
      {children}
    </ThemedView>
  );
};
