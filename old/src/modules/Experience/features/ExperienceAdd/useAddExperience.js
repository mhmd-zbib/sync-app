import { useState } from "react";

export function useAddExperience() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [fieldEditing, setFieldEditing] = useState(null);

  const [expData, setExpData] = useState({
    position: "",
    company: "",
    description: "",
    from: "",
    to: "",
  });

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const onChange = (selectedDate) => {
    Keyboard.dismiss();
    const currentDate = selectedDate || selectedDate;
    const stampDate = DateTimeFormatter.fromISOtoUTC(currentDate);
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

  return {
    selectedDate,
    showPicker,
    onChange,
    showDateTimePicker,
    expData,
    handleInputChange,
    fromDate,
    toDate,
    fieldEditing,
  };
}
