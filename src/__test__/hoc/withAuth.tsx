import { useState } from "react";

const WithMoneyButton = (OriginalComponent: any) => {
  function NewComponent() {
    const [money, setMoney] = useState(0);
    const addMoney = () => {
      setMoney(money + 1);
    };

    return <OriginalComponent addMoney={addMoney} money={money} />;
  }
  return NewComponent;
};

export default WithMoneyButton;
