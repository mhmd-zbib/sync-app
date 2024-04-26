import { createStackNavigator } from "@react-navigation/stack";

import AddOptionsScreen from "../modules/Add";

const Stack = createStackNavigator();

function AddOptionStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="AddOptionScreen" component={AddOptionsScreen} />
    </Stack.Navigator>
  );
}

export default AddOptionStack;
