import { Card } from "@/components/Card";
import React from "react";
import BarGraph from "../../../components/Bar-Graph";
import DashboardContainer from "../components/Dashboard-Container";
import ThemedText from "@/components/ThemedText";
import { View } from "react-native";
import Separator from "@/components/Separator";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useColorScheme";
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

  const theme = useTheme();

  return (
    <DashboardContainer title="Reminders">
      <Card disabled style={{ gap: 42 }}>
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
            <View
              style={{
                alignItems: "flex-end",
                gap: 5,
              }}>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                <MaterialIcons
                  name="local-fire-department"
                  size={24}
                  color={theme.textAccent}
                />
                <ThemedText size={22}>25</ThemedText>
              </View>

              <ThemedText variant="secondary">Weekly</ThemedText>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                gap: 5,
              }}>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                <MaterialIcons
                  name="local-fire-department"
                  size={24}
                  color={theme.textAccent}
                />
                <ThemedText size={22}>35</ThemedText>
              </View>

              <ThemedText variant="secondary">Largest</ThemedText>
            </View>
          </View>
        </View>

        <BarGraph data={data} />
      </Card>
    </DashboardContainer>
  );
};

export default RemindersCreated;
