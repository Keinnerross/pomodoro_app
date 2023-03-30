import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { context } from "../context/store";

const NavPomodoro = () => {
  //   const { setTime } = useContext(context);
  //   const { pomoSetting } = useContext(context);
  //   const { shortBreak } = useContext(context);
  //   const { longBreak } = useContext(context);
  //   const { pomoSession, setPomoSession } = useContext(context);
  //   const { setToggleSetting } = useContext(context);

  //   useEffect(() => {
  //     if (pomoSession == "Pomodoro") {
  //       setTime(pomoSetting * 60);
  //     } else if (pomoSession == "Short") {
  //       setTime(shortBreak * 60);
  //     } else if (pomoSession == "Long") {
  //       setTime(longBreak * 60);
  //     }
  //   }, [pomoSession, pomoSetting, shortBreak, longBreak]);

  return (
    <View style={styles.navPomodoroContainer}>
      <TouchableOpacity
        style={[styles.navItem]}
        onPress={() => setPomoSession("Pomodoro")}
      >
        <Text style={styles.navText}>Pomo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem]}
        onPress={() => setPomoSession("Short")}
      >
        <Text style={styles.navText}>Short</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem]}
        onPress={() => setPomoSession("Long")}
      >
        <Text style={styles.navText}>Long</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingPomoButton}
        // onPress={() => setToggleSetting(true)}
      >
        <Ionicons name="settings-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navPomodoroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2A2A2E",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navItem: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navText: {
    color: "white",
    fontSize: 18,
  },
  activeNav: {
    backgroundColor: "#636366",
  },
  settingPomoButton: {
    backgroundColor: "#636366",
    borderRadius: 50,
    padding: 10,
  },
});

export default NavPomodoro;
