import { useNavigation } from "@react-navigation/native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import GoBackButton from "../../../../../shared/components/ui/buttons/GoBackButton";
import { useTheme } from "../../../../../shared/stores/themeStore";
import useAddContact from "./useAddContact";

export default function useAddContactLayout(step, prevStep) {
  const navigation = useNavigation();
  const theme = useTheme();
  const { addContact } = useAddContact();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        step > 0 ? (
          <Typography
            onPress={() => addContact.mutate()}
            color={theme.textSecondary}>
            Skip
          </Typography>
        ) : null,
      headerLeft: () =>
        step > 0 ? <GoBackButton onPress={prevStep} /> : <GoBackButton />,
    });
  }, [navigation, step]);
}
