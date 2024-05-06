import { useState } from "react";
import ContactScreen from "../../Contacts/features/ContactList/index";

export const useConnections = () => {
  const [activeContent, setActiveContent] = useState(0);

  const getContent = () => {
    switch (activeContent) {
      case 0:
        return <ContactScreen />;
      case 1:
        return "FAFS";
      case 2:
        return "Starred content shown here";
      case 3:
        return "Tagged content shown here";
      case 4:
        return "Un-Tagged content shown here";
      default:
        return <ContactScreen />;
    }
  };

  return { setActiveContent, getContent, activeContent };
};
