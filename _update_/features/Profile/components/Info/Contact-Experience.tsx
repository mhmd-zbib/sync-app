import { View, Text } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";

interface ExperiencePropsType {
  experience: ExperienceType[];
}

const ContactExperience = ({ experience }: ExperiencePropsType) => {
  return (
    <View style={{ gap: 15 }}>
      {experience.map((experience) => (
        <View style={{ gap: 8 }}>
          <ThemedText size={18}>{experience.title}</ThemedText>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <ThemedText variant="accent">
              {experience.company_name}
              {"  ●  "}
              {experience.from_date}
              {"  ●  "}
              {experience.to_date ? experience.to_date : "Current"}
            </ThemedText>
          </View>

          <ThemedText>{experience.description}</ThemedText>
        </View>
      ))}
    </View>
  );
};

export default ContactExperience;
