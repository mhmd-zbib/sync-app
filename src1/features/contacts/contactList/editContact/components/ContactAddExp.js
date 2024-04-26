import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import InputPageLayout from "../../../../components/layout/InputPageLayout";
import InputText from "../../../../components/ui/InputText";
import useContactAddExp from "../hooks/useContactAddExp";
import Button from "../../../../components/ui/buttons/Button";
import Label from "../../../../components/ui/Label";
import DateButton from "../../../../components/ui/buttons/DateButton";
import Typography from "../../../../components/ui/text/Typography";

const ContactAddExperience = () => {
  const { handleChange, handleSubmit, formData, disabled } = useContactAddExp();

  return (
    <InputPageLayout
      buttonTitle={"Save"}
      onPress={handleSubmit}
      disabled={disabled}>
      <InputText
        label={"Job Title"}
        value={formData.jobTitle}
        onChange={(text) => handleChange("jobTitle", text)}
      />
      <InputText
        label={"Position"}
        value={formData.position}
        onChange={(text) => handleChange("position", text)}
      />
      <InputText
        label={"Company Name"}
        value={formData.companyName}
        onChange={(text) => handleChange("companyName", text)}
      />
      <InputText
        label={"Website Link"}
        value={formData.websiteLink}
        onChange={(text) => handleChange("websiteLink", text)}
      />

      <View style={{ flexDirection: "row", gap: 26, alignItems: "center" }}>
        <DateButton
          title="Start Date"
          onDateChange={(date) => {
            handleChange("startDate", date);
          }}
        />
        <DateButton
          title="End Date"
          minDate={formData.startDate}
          onDateChange={(date) => {
            handleChange("endDate", date);
          }}
        />
      </View>
    </InputPageLayout>
  );
};

export default ContactAddExperience;

const styles = StyleSheet.create({});
