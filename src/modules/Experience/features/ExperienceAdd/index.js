import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import Label from "../../../../shared/components/ui/Label";
import Button from "../../../../shared/components/ui/buttons/Button";
import DateTimeFormatter from "../../../../shared/hooks/useFormatDate";
import { useAddExperience } from "./useAddExperience";
import { useExperienceMutation } from "../../hooks/useExperienceMutation";

const ExperienceAddScreen = () => {
  const { mutate } = useExperienceMutation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [fieldEditing, setFieldEditing] = useState(null);

  const [expData, setExpData] = useState({
    title: "",
    company: "",
    description: "",
    from: "",
    to: "",
  });

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const onChange = (event, selectedDate) => {
    Keyboard.dismiss();
    const currentDate = selectedDate || selectedDate;

    const stampDate = DateTimeFormatter.fromISOtoUTC(currentDate);

    console.log(stampDate);

    setShowPicker(false);
    setSelectedDate(currentDate);
    if (fieldEditing === "from") {
      setFromDate(currentDate);
      setExpData({
        ...expData,
        from: stampDate,
      });
      if (toDate && toDate < currentDate) {
        setExpData({ ...expData, to: "" });
        setToDate(null);
        console.log("changed to");
      }
    } else if (fieldEditing === "to") {
      setToDate(currentDate);
      setExpData({
        ...expData,
        to: stampDate,
      });
    }
  };

  const showDateTimePicker = (field) => {
    if (field === fieldEditing) {
      setShowPicker(false);
      setFieldEditing(null);
      setExpData({ ...expData, to: "" });
      setToDate(null);
    } else {
      setShowPicker(true);
      setFieldEditing(field);
    }
  };

  const handleInputChange = (key, value) => {
    setExpData({ ...expData, [key]: value });
  };

  return (
    <InputPageLayout
      disabled={
        expData.title === "" ||
        expData.company === "" ||
        expData.from === "" ||
        expData.to === ""
      }
      buttonTitle={"Add"}
      screenTitle={"Add Experience"}
      onPress={() => mutate(expData)}>
      <InputText
        label={"Title"}
        value={expData.title}
        onChangeText={(text) => handleInputChange("title", text)}
      />
      <InputText
        label={"Company Name"}
        value={expData.company}
        onChangeText={(text) => handleInputChange("company", text)}
      />
      <InputText
        label={"Description"}
        multiline
        value={expData.description}
        onChangeText={(text) => handleInputChange("description", text)}
      />
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
            title={fromDate ? fromDate.toDateString() : "Tap to set"}
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
