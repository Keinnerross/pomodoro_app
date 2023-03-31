import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
// import { context } from "../context/store";

const ProgressBar = ({ barValue, time }) => {
  //   const { time } = useContext(context);
  //   const { pomoSetting } = useContext(context);
  //   const { shortBreak } = useContext(context);
  //   const { longBreak } = useContext(context);
  //   const { pomoSession } = useContext(context);

  // useEffect(() => {
  //   if (pomoSession == "Pomodoro") {
  //     setBarValue(pomoSetting);
  //   } else if (pomoSession == "Short") {
  //     setBarValue(shortBreak);
  //   } else if (pomoSession == "Long") {
  //     setBarValue(longBreak);
  //   }
  // }, [time]);

  const barProgress = (time / 60 / barValue) * 100; /*Corregir */

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${barProgress}%` }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E5E5E5",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2F80ED",
  },
});

export default ProgressBar;
