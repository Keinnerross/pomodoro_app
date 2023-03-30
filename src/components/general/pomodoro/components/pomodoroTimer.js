import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
// import NavPomodoro from "./navPomodoro";
// import CycleCounter from "./cycleCounter";
// import ProgressBar from "./progressbar";
// import ButtonsPomo from "./buttonsPomo";
// import SettingPomodoro from "./settingPomodoro";

// import { context } from "../context/store";

const PomoTimer = () => {
  // const { time, setTime, isActive } = useContext(context);
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(false);
  // const [soundSelect, setSoundSelect] = useState(1);

  const showTime = (time) => {
    const min = parseInt(time / 60);
    const sec = parseInt(time % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const [timeId, setTimeId] = useState(0);

  useEffect(() => {
    let runningPomo = null;

    if (isActive) {
      runningPomo = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setTimeId(runningPomo);
    } else {
      clearInterval(timeId);
    }
    console.log("effect");
  }, [isActive]);

  /* TO DINAMIC TITLE */
  // useEffect(() => {
  //   document.title = `${showTime(time)} - Focus Warrior! `;
  // }, [time]);

  // const changeSound = (value) => {
  //   setSoundSelect(value);
  // };

  return (
    <>
      {/* <SettingPomodoro changeSound={changeSound} /> */}
      <View style={styles.pomodoroContainer}>
        <Text style={styles.pomoTimeContainer}>{showTime(time)}</Text>
        {/* <ButtonsPomo /> */}
        {/* <Text style={styles.cycleView}>
          <CycleCounter soundSelect={soundSelect} />
          /4
        </Text> */}
        <Text style={styles.focusWarrior}>Focus Warrior </Text>
        {/* <View style={styles.pomoBarContainer}>
          <ProgressBar />
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pomodoroContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pomoNav: {
    marginBottom: 10,
  },
  pomoTimeContainer: {
    fontSize: 80,
    marginBottom: 30,
  },
  cycleView: {
    fontSize: 30,
    marginBottom: 10,
  },
  focusWarrior: {
    fontSize: 20,
    marginBottom: 10,
  },
  pomoBarContainer: {
    width: 250,
    height: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
});

export default PomoTimer;
