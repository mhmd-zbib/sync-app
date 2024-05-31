import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import Button from "../../../../shared/components/ui/buttons/Button";
import DateTimeFormatter from "../../../../shared/hooks/useFormatDate";
import { useProfileQuery } from "../../queries/useProfileQuery";
import useProfileIdStore from "../../store/useProfileIdStore";
import { useEditProfileMutation } from "../../queries/useEditProfileMutation";

const EditProfileScreen = () => {
  const { id } = useProfileIdStore();
  const { data } = useProfileQuery(id);

  const [name, setName] = React.useState(data?.name);
  const [birthday, setBirthday] = useState(data?.birthday);

  const [showPicker, setShowPicker] = useState(false);

  const { mutate } = useEditProfileMutation();

  const onChange = (event, date) => {
    setShowPicker(false);
    if (event.type === "dismissed") return;
    if (event !== null && date) {
      setBirthday(date);
    }
  };

  const edit = () => {
    const birthdayStamp = DateTimeFormatter.fromISOtoUTC(birthday);
    mutate({ id, name, birthday: birthdayStamp });
  };

  return (
    <InputPageLayout
      buttonTitle={"Save"}
      screenTitle={"Edit Profile"}
      onPress={edit}>
      <InputText label="Name" value={name} onChange={setName} />

      <Button
        title={`Birthday: ${DateTimeFormatter.formatFullDate(birthday)} `}
        size="sm"
        variant="accent"
        style={{ width: "auto", alignSelf: "flex-start" }}
        onPress={() => setShowPicker(true)}
      />

      {showPicker && (
        <DateTimePicker
          display="calendar"
          value={new Date()}
          onChange={onChange}
        />
      )}
    </InputPageLayout>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({});
