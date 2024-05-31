import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={{ padding: 10 }}>
      <ThemedText size={"16"}>hi</ThemedText>
      <Card>
        <ThemedText size={16}>hello</ThemedText>
      </Card>
    </ThemedView>
  );
}
