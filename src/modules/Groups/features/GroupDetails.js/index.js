import React from "react";
import { View } from "react-native";
import Typography from "../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import DateTimeFormatter from "../../../../shared/hooks/useFormatDate";
import GroupTabView from "./components/GroupTabView";
import { useGroupDetailsQuery } from "../../queries/useGroupDetailsQuery";
import Loading from "../../../../shared/components/layout/Loading";

const GroupDetailsScreen = ({ route }) => {
  const { id } = route.params;

  const { data, isLoading } = useGroupDetailsQuery(id);
  if (isLoading) return <Loading />;

  return (
    <DetailPage screenTitle={""}>
      <View style={{ flexDirection: "row", gap: 15, paddingHorizontal: 10 }}>
        <ProfilePicture
          emoji={data.emoji}
          size="lg"
          color={data.background_color}
        />
        <View style={{ justifyContent: "space-around" }}>
          <Typography variant="lg" fontWeight={500}>
            {data.name}
          </Typography>
          <Typography>
            {DateTimeFormatter.formatFullDate(data.created_at)}
          </Typography>
        </View>
      </View>

      <GroupTabView />
    </DetailPage>
  );
};

export default GroupDetailsScreen;
