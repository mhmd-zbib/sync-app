import React from "react";
import ThemedText from "./ThemedText";

const Label = ({ title }: { title: string }) => {
  return (
    <ThemedText style={{ fontWeight: "500" }} size={14} variant="secondary">
      {title}
    </ThemedText>
  );
};

export default Label;
