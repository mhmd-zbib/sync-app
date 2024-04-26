import { useNavigation } from "@react-navigation/native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import GoBackButton from "../../../../../shared/components/ui/buttons/GoBackButton";

export default function useAddContactLayout(step, prevStep) {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (step > 0 ? <Typography>Skip</Typography> : null),
      headerLeft: () =>
        step > 0 ? <GoBackButton onPress={prevStep} /> : <GoBackButton />,
    });
  }, [navigation, step]);
}
