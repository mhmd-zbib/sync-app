import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

const App = () => {
  // State to hold the current selection
  const [category, setCategory] = useState("reminders");

  // Different data arrays
  const data = {
    reminders: [
      { id: "1", text: "Doctor Appointment at 3 PM" },
      { id: "2", text: "Meeting at 5 PM" },
    ],
    contacts: [
      { id: "1", name: "John Doe", phone: "123-456-7890" },
      { id: "2", name: "Jane Doe", phone: "987-654-3210" },
    ],
    notes: [
      { id: "1", content: "Buy groceries" },
      { id: "2", content: "Read the book" },
    ],
  };

  // Function to render item based on type
  const renderItem = ({ item }) => {
    switch (category) {
      case "reminders":
        return <Text>{item.text}</Text>;
      case "contacts":
        return (
          <Text>
            {item.name} - {item.phone}
          </Text>
        );
      case "notes":
        return <Text>{item.content}</Text>;
      default:
        return <Text>Unknown category</Text>;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Buttons to switch categories */}
      <Button title="Show Reminders" onPress={() => setCategory("reminders")} />
      <Button title="Show Contacts" onPress={() => setCategory("contacts")} />
      <Button title="Show Notes" onPress={() => setCategory("notes")} />

      {/* FlatList to display items */}
      <FlatList
        data={data[category]}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default App;
