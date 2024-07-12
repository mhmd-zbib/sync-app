import EmptyComponent from "@/components/ui/Empty-Component";
import InfoContainer from "@/components/ui/Info-Container";
import Separator from "@/components/ui/Separator";
import ThemedText from "@/components/ui/ThemedText";
import { useContact } from "@/modules/Contact/query/get-contact";
import TagListItem from "@/modules/Tags/components/Tag-List-Item";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const ContactInfoScreen = () => {
  const { contactId } = useLocalSearchParams();
  const { data } = useContact({ contactId });

  const { description, phone, email, tags = [], experience = [] } = data || {};

  return (
    <View style={styles.container}>
      <InfoContainer title="Description" href={`./editDescription`}>
        {description ? (
          <ThemedText>{description}</ThemedText>
        ) : (
          <EmptyComponent />
        )}
      </InfoContainer>

      <InfoContainer title="Contact" href={`./editContact`}>
        {!email && !phone ? (
          <EmptyComponent />
        ) : (
          <>
            {email && (
              <View>
                <ThemedText variant="secondary">Email Address</ThemedText>
                <ThemedText size={16}>{email}</ThemedText>
              </View>
            )}
            {phone && email && <Separator />}
            {phone && (
              <View>
                <ThemedText variant="secondary">Phone Number</ThemedText>
                <ThemedText size={16}>{phone}</ThemedText>
              </View>
            )}
          </>
        )}
      </InfoContainer>

      <InfoContainer
        title="Tags"
        style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {tags.length > 0 ? (
          tags.map((tag, index) => <TagListItem key={index} tag={tag} />)
        ) : (
          <EmptyComponent />
        )}
      </InfoContainer>

      <InfoContainer title="Experience">
        {experience.length > 0 ? (
          experience.map((exp, index) => (
            <>
              <View style={{ gap: 8 }}>
                <ThemedText size={18}>{exp.title}</ThemedText>
                <ThemedText variant="accent">
                  {`${exp.company_name}    ●    ${exp.from_date}    ●   ${
                    exp.to_date ? exp.to_date : "Current"
                  }`}
                </ThemedText>
                <ThemedText>{exp.description}</ThemedText>
              </View>

              {index !== experience.length - 1 && <Separator />}
            </>
          ))
        ) : (
          <EmptyComponent />
        )}
      </InfoContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default ContactInfoScreen;
