import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";
import DetailPage from "../../../shared/components/layout/DetailPage";

const ProfileScreen = () => {
  const user = {
    name: "John Doe",
    // email: "john@example.com",
    birthday: 8885552742001,
    description: "I'm a software engineer",
    phone: 76782106,
    email: "test@gmail.com",
    tags: ["worker", "good person", "chef", "pastry", "tal", "gamers"],
    experience: [
      {
        id: 1,
        title: "Software Engineer",
        company: "Google",
        startDate: 15885552742001,
        endDate: 15885552742001,
        description: "Develop and maintain software applications",
      },
    ],
  };

  return (
    <DetailPage style={{ paddingHorizontal: 10 }}>
      <ProfileHeader data={user} />
      <ProfileTabs data={user} />
    </DetailPage>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
