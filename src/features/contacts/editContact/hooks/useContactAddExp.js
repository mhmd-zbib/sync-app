import { useState } from "react";
import DateTimeFormatter from "../../../../hooks/common/useFormatDate";

const useContactAddExp = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    position: "",
    companyName: "",
    websiteLink: "",
    startDate: null,
    endDate: null,
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { startDate, endDate } = formData;
    console.log(DateTimeFormatter.fromISOtoUTC(endDate), endDate);
    console.log(formData);
  };

  const disabled = !(
    formData.jobTitle &&
    formData.position &&
    formData.companyName &&
    formData.startDate &&
    formData.endDate
  );

  return {
    disabled,
    handleChange,
    handleSubmit,
    formData,
  };
};

export default useContactAddExp;
