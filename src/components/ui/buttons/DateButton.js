import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

const DateButton = ({ title, onDateChange, style, minDate }) => {
  const [state, setState] = useState({
    show: false,
    date: null,
  });

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || state.date;
    setState({ ...state, show: false, date: currentDate });
    if (onDateChange) {
      onDateChange(currentDate);
    }
  };

  const showPicker = () => {
    setState({ ...state, show: true });
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <Button
          title={state.date ? state.date.toLocaleDateString() : title}
          onPress={showPicker}
          size="sm"
          variant="accent"
        />
      </View>
      {state.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={state.date || new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
          minimumDate={minDate}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 7,
  },
});

export default DateButton;
