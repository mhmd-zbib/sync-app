import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../src/shared/components/ui/Typography";
import Card from "../src/shared/components/ui/cards/Card";
import ProfilePicture from "../src/shared/components/ui/cards/ProfilePicture";
import DateTimeFormatter from "../src/shared/hooks/useFormatDate";
import { useTheme } from "../src/shared/stores/themeStore";
import { FILTER_OPTIONS } from "./FILTER_OPTIONS";
import { Feather, FontAwesome } from "@expo/vector-icons";

const ConnectionItem = ({ item, filter, onPress }) => {
  const theme = useTheme();

  return (
    <Card
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <ProfilePicture
          size="md"
          name={item.name}
          emoji={item.emoji}
          color={item.background_color}
        />
        <View style={{ justifyContent: "space-between", gap: 5 }}>
          <Typography variant="lg">{item.name} </Typography>
        </View>
      </View>

      <View>
        {filter === FILTER_OPTIONS.Groups ? (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Typography color={theme.textSecondary}>
              {item.member_count}
            </Typography>

            <Feather name="users" size={20} color={theme.textAccent} />
          </View>
        ) : (
          <Typography variant={"sm"} color={theme.textSecondary}>
            {DateTimeFormatter.formatFullDate(item.created_at)}
          </Typography>
        )}
      </View>
    </Card>
  );
};

export default ConnectionItem;

const styles = StyleSheet.create({});
