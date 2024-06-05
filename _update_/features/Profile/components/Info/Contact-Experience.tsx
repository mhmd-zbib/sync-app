import { View, Text } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import Separator from "@/components/Separator";

interface ExperiencePropsType {
  experiences: ExperienceType[];
}

const ContactExperience = ({ experiences }: ExperiencePropsType) => {
  return (
    <View>
      {experiences.map((experience, index) => (
        <>
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

          {index !== experiences.length - 1 && <Separator />}
        </>
      ))}
    </View>
  );
};

export default ContactExperience;
