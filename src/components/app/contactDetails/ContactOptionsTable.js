import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ContactDetailsTab from "./ContactDetailsTab";
import ContactNotesTab from "./ContactNotesTab";

const Tab = createMaterialTopTabNavigator();

const ContactOptionsTable = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ContactDetailsTab} />
      <Tab.Screen name="Settings" component={ContactNotesTab} />
    </Tab.Navigator>
  );
};

export default ContactOptionsTable;

const styles = StyleSheet.create({});
