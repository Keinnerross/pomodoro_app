import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavPomodoro = ({ updatePomoSession, ifOpen }) => {
  return (
    <View style={styles.navPomodoroContainer}>
      <TouchableOpacity
        style={[styles.navItem]}
        onPress={() => updatePomoSession("Pomodoro")}
      >
        <Text style={styles.navText}>Pomo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem]}
        onPress={() => updatePomoSession("Short")}
      >
        <Text style={styles.navText}>Short</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem]}
        onPress={() => updatePomoSession("Long")}
      >
        <Text style={styles.navText}>Long</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingPomoButton}
        onPress={() => ifOpen(true)}
      >
        <Ionicons name="settings-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navPomodoroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    padding: 5,
  },
});

export default NavPomodoro;
