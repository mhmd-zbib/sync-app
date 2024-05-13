export default function useExperienceAdd () {
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

  return {
    showDateTimePicker,
    onChange
  }

}