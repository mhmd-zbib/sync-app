import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InfoSectionCont from "../components/InfoSectionCont";
import useGetContactProfile from "../../../hooks/useGetContactProfile";
import Typography from "../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../shared/stores/themeStore";
import EmptySection from "../components/EmptySection";

const Label = ({ label, data, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ gap: 8 }}>
      <Typography variant="md" color={theme.textSecondary}>
        {label}
      </Typography>
      {data ? <Typography>{data}</Typography> : <EmptySection />}
    </TouchableOpacity>
  );
};

const ConnectionContactSection = () => {
  const { data } = useGetContactProfile();

  return (
    <InfoSectionCont label={"Contact"} style={{ gap: 24 }}>
      <Label label={"Phone Number"} data={data.phoneNumber} />
      <Label label={"Email Address"} data={data.email} />
    </InfoSectionCont>
  );
};

export default ConnectionContactSection;

const styles = StyleSheet.create({});
