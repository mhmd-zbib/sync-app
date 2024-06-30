import BarGraph from "@/components/ui/Bar-Graph";
import Separator from "@/components/ui/Separator";
import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const RemindersCreated = () => {
  const data = [
    { label: "S", value: 23 },
    { label: "M", value: 20 },
    { label: "W", value: 47 },
    { label: "T", value: 17 },
    { label: "Th", value: 80 },
    { label: "F", value: 34 },
    { label: "S", value: 23 },
  ];

  const value = data.map((item) => item.value);
  const label = data.map((item) => item.label);

  const ScoreItem = ({ title, value }: { title: string; value: number }) => {
    const theme = useTheme();
    return (
      <View
        style={{
          alignItems: "flex-end",
          gap: 5,
        }}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color={theme.textAccent}
          />
          <ThemedText size={22}>{value}</ThemedText>
        </View>
        <ThemedText variant="secondary">{title}</ThemedText>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}>
        <View style={{ gap: 4, flex: 1 }}>
          <ThemedText style={{ fontWeight: "500" }} size={22}>
            09/25
          </ThemedText>
          <ThemedText variant="secondary">Done this week</ThemedText>
        </View>
        <Separator vertical />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
          }}>
          <ScoreItem title="Weekly" value={20} />
          <ScoreItem title="Largest" value={35} />
        </View>
      </View>
      <BarGraph data={value} labels={label} />
    </>
  );
};

export default RemindersCreated;
