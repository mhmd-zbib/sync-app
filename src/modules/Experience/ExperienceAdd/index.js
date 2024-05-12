import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Keyboard, StyleSheet, TouchableOpacity, View } from "react-native";
import InputPageLayout from "../../../shared/components/layout/InputPageLayout";
import InputText from "../../../shared/components/ui/InputText";
import Label from "../../../shared/components/ui/Label";
import Typography from "../../../shared/components/ui/Typography";
import Button from "../../../shared/components/ui/buttons/Button";

const ExperienceAddScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [fieldEditing, setFieldEditing] = useState(null);

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const onChange = (event, selectedDate) => {
    Keyboard.dismiss();
    const currentDate = selectedDate || selectedDate;
    setShowPicker(false);
    setSelectedDate(currentDate);
    if (fieldEditing === "from") {
      setFromDate(currentDate);
      if (toDate && toDate < currentDate) {
        setToDate(null);
      }
    } else if (fieldEditing === "to") {
      setToDate(currentDate);
    }
  };

  const showDateTimePicker = (field) => {
    if (field === fieldEditing) {
      setShowPicker(false);
      setFieldEditing(null);
      setToDate(null);
    } else {
      setShowPicker(true);
      setFieldEditing(field);
    }
  };

  return (
    <InputPageLayout buttonTitle={"Add"} screenTitle={"Add Experience"}>
      <InputText label={"Position"} />
      <InputText label={"Company Name"} />
      <InputText label={"Description"} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: 15,
          flex: 1,
        }}>
        <View style={{ flex: 1, gap: 5 }}>
          <Label label={"From"} />
          <Button
            title={fromDate ? fromDate.toDateString() + "  ✕" : "Tap to set"}
            variant="secondary"
            size="sm"
            onPress={() => showDateTimePicker("from")}
          />
        </View>

        <View style={{ flex: 1, gap: 5 }}>
          <Label label={"To"} />
          <Button
            title={toDate ? toDate.toDateString() + "  ✕" : "Present"}
            variant="secondary"
            size="sm"
            onPress={() => showDateTimePicker("to")}
          />
        </View>
      </View>

      {showPicker && (
        <DateTimePicker
          display="calendar"
          value={selectedDate}
          minimumDate={fieldEditing === "to" ? fromDate : undefined}
          onChange={onChange}
        />
      )}
    </InputPageLayout>
  );
};

export default ExperienceAddScreen;

const styles = StyleSheet.create({});
