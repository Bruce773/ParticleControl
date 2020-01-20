import React, { useState } from "react";
import { Text } from "react-native";
import { LargeButton, ButtonText, Spacer } from "./elements";

export const HomeScreen: React.FC = () => {
  const [active, setActive] = useState(false);
  const buttonClickedMessage = `LED is${active ? "" : " not"} active`;

  return (
    <>
      <Text style={{ fontSize: 30 }}>{buttonClickedMessage}</Text>
      <Spacer value={30} />
      <LargeButton
        bgColor={active ? "green" : "red"}
        onPress={() => {
          setActive(!active);
        }}
      >
        <ButtonText>Touchable!</ButtonText>
      </LargeButton>
    </>
  );
};
