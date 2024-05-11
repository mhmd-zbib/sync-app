import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileInfo from "../ProfileInfo";
import ProfileScreen from "..";
// import OtherScreen from "./OtherScreen"; // Import other screens as needed

const Tab = createBottomTabNavigator();

const ProfileTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default ProfileTabs;
