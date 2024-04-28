import React from "react";
import { StyleSheet } from "react-native";
import Typography from "../../../../../shared/components/ui/Typography";
import useGetContactProfile from "../../../hooks/useGetContactProfile";
import EmptySection from "../components/EmptySection";
import InfoSection from "../components/InfoSectionCont";

const DescriptionContactSection = () => {
  const { data } = useGetContactProfile();
  const description = data.description;

  return (
    <InfoSection label={"Description"}>
      {description ? <Typography>{description}</Typography> : <EmptySection />}
    </InfoSection>
  );
};

export default DescriptionContactSection;

const styles = StyleSheet.create({});
