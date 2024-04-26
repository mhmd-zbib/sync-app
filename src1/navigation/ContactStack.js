import ContactAddExperience from "../features/contacts/editContact/components/ContactAddExp";
import ContactEditConnections from "../features/contacts/editContact/components/ContactEditConnections";
import ContactEditDescription from "../features/contacts/editContact/components/ContactEditDescription";
import AddContactPage from "../pages/contacts/AddContactPage";
import DetailsContactPage from "../pages/contacts/DetailsContactPage";
import AddContactNote from "../pages/notes/AddContactNotePage";

export const ContactStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="ContactDetails" component={DetailsContactPage} />
    <Stack.Screen name="AddContact" component={AddContactPage} />
    <Stack.Screen name="AddContactNote" component={AddContactNote} />
    <Stack.Screen
      name="EditContactDescription"
      component={ContactEditDescription}
      options={{ title: "Edit Description" }}
    />
    <Stack.Screen
      name="ContactEditConnections"
      component={ContactEditConnections}
      options={{ title: "Edit Contact" }}
    />
    <Stack.Screen
      name="ContactAddExperience"
      component={ContactAddExperience}
      options={{ title: "Job" }}
    />
  </Stack.Navigator>;
};
