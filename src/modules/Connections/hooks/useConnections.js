import { useState } from "react";
import Contacts from "../features/Contacts";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import Groups from "../features/Groups";

export const useConnections = () => {
  const [activeContent, setActiveContent] = useState(0);

  const getContent = () => {
    switch (activeContent) {
      case 0:
        return <Contacts />;
      case 1:
        return <Groups />;
      case 2:
        return "Starred content shown here";
      case 3:
        return "Tagged content shown here";
      case 4:
        return "Un-Tagged content shown here";
      default:
        return <Contacts />;
    }
  };

  return { setActiveContent, getContent, activeContent };
};
