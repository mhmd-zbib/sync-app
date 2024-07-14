import FormLayout from "@/components/layouts/FormLayout";
import TextInput from "@/components/ui/TextInput";
import { useContact } from "@/features/Contact/query/get-contact";
import { useLocalSearchParams, usePathname } from "expo-router";
import React, { useState } from "react";

const EditContactScreen = () => {
  const { id } = useLocalSearchParams();
  const { data } = useContact({ contactId: id });

  const [contact, setContact] = useState({
    email: data?.email,
    phone: data?.phone,
  });

  const handleInputChange = (key: keyof any, value: string) => {
    setContact((prevContact) => ({
      ...prevContact,
      [key]: value,
    }));
  };

  return (
    <FormLayout>
      <TextInput
        label="Email Address"
        value={contact.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
      />
      <TextInput
        label="Phone Number"
        value={contact.phone}
        onChange={(e) => handleInputChange("phone", e.target.value)}
      />
    </FormLayout>
  );
};

export default EditContactScreen;
