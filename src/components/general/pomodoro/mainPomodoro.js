import { useState } from "react";
import { View, StyleSheet } from "react-native";
import NavPomodoro from "./components/navPomodoro";
import ButtonsPomo from "./components/buttonsPomodoro";
import PomoTimer from "./components/pomodoroTimer";
import CyclePomo from "./components/cyclePomo";
import ProgressBar from "./components/progressBar";
import SettingsPomodoro from "./settingsPomodoro";

/*Pomodoro Variables*/

const [time, setTime] = useState(300);
const [isActive, setIsActive] = useState(false);
const [timeId, setTimeId] = useState(0);

/*Pomodoro Functions */

const showTime = (time) => {
  const min = parseInt(time / 60);
  const sec = parseInt(time % 60);
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
};

const MainPomodoro = () => {
  return (
    <View style={styles.pomodoroMainContainer}>
      <SettingsPomodoro />
      <NavPomodoro />
      <PomoTimer />
      <ButtonsPomo />
      <CyclePomo />
      <ProgressBar time={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  pomodoroMainContainer: {
    width: "65%",
    backgroundColor: "#fff",
  },
});

export default MainPomodoro;
