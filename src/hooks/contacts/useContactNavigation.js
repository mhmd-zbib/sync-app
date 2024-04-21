import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContactForm } from "../../queries/contacts/useContactForm";
import GoBackButton from "../../components/ui/buttons/GoBackButton";
import Typography from "../../components/ui/text/Typography";
import { useTheme } from "../../stores/shared/themeStore";
import useContactFormStore from "../../stores/contacts/useAddCotactStore";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

const useContactNavigation = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { submitForm } = useContactForm();

  const formData = useContactFormStore((state) => state.formData);
  const { step, previousStep } = useContactFormStore((state) => ({
    step: state.step,
    previousStep: state.previousStep,
  }));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: step === 0 ? "Profile Info" : formData.name,
      headerLeft: () => (
        <GoBackButton
          onPress={() => (step === 0 ? navigation.goBack() : previousStep())}
        />
      ),

      headerRight: () =>
        step === 0 ? null : (
          <TouchableOpacity activeOpacity={0.8} onPress={submitForm}>
            <Typography color={theme.textSecondary}>Skip</Typography>
          </TouchableOpacity>
        ),
    });
  }, [navigation, formData.name, step, previousStep]);
};

export default useContactNavigation;

const styles = StyleSheet.create({});
