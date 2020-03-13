import React, { useState } from "react";
import { Text, Vibration } from "react-native";
import { LargeButton, ButtonText, Spacer } from "./elements";
import TrackPlayer from "react-native-track-player";
import Video from "react-native-video";

export const HomeScreen: React.FC = () => {
  const [active, setActive] = useState(false);
  // const buttonClickedMessage = `LED is${active ? "" : " not"} active`;

  return (
    <>
      {/* <Text style={{ fontSize: 30 }}>{buttonClickedMessage}</Text> */}
      <Spacer value={30} />
      <LargeButton
        bgColor={active ? "green" : "red"}
        onPress={() => {
          Vibration.vibrate(500);
          setActive(!active);
        }}
      >
        {/* <ButtonText>{active ? "Deactivate" : "Activate"}</ButtonText> */}
        <ButtonText>Click Here</ButtonText>
      </LargeButton>
      {TrackPlayer.setupPlayer().then(async () => {
        // The player is ready to be used
        active &&
          (await TrackPlayer.add([
            {
              id: "1234567890-98765432",
              url: "https://youtu.be/2AVs-Yh1bS8",
              title: "Testing...",
              artist: "test person!"
            }
          ]));
        TrackPlayer.play();
      })}
    </>
  );
};
