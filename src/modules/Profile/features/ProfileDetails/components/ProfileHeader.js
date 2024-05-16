import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "../../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import DateTimeFormatter from "../../../../../shared/hooks/useFormatDate";
import { useTheme } from "../../../../../shared/stores/themeStore";
import { useBirthdayContactMutation } from "../../../queries/useBirthdayContactMutation";
import { useProfileQuery } from "../../../queries/useProfileQuery";
import useProfileIdStore from "../../../store/useProfileIdStore";

const ProfileHeader = () => {
  const id = useProfileIdStore((state) => state.id);
  const { data } = useProfileQuery(id);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(data.birthday || new Date());
  const { mutate } = useBirthdayContactMutation();

  const { name, birthday } = data;
  const theme = useTheme();

  const onChange = (event, date) => {
    setShowPicker(false);
    if (event.type === "dismissed") return;

    if (event !== null && date) {
      const birthday = DateTimeFormatter.fromISOtoUTC(date);
      mutate({ id, birthday });
      setSelectedDate(date);
    }
  };

  return (
    <>
      <View style={{ flexDirection: "row", gap: 16, marginHorizontal: 10 }}>
        <ProfilePicture name={name} size="lg" />

        <View
          style={{
            justifyContent: "center",
            gap: 10,
            flexDirection: "column",
          }}>
          <Typography variant="xlg" fontWeight={500}>
            {name}
          </Typography>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowPicker(true)}
            style={{
              width: "auto",
              alignSelf: "flex-start",
              backgroundColor: theme.secondary,
              padding: 3,
              paddingHorizontal: 10,
              borderColor: theme.accent,
              borderWidth: 1,
              textAlign: "center",
              borderRadius: 5,
            }}>
            <Typography
              variant="sm"
              color={birthday ? theme.textSecondary : theme.textAccent}>
              {birthday
                ? DateTimeFormatter.formatFullDate(birthday)
                : "Add birthday"}
            </Typography>
          </TouchableOpacity>
        </View>
      </View>

      {showPicker && (
        <DateTimePicker
          display="calendar"
          value={selectedDate}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
