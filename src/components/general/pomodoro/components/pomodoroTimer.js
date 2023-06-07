import { View, Text, StyleSheet } from "react-native";

const PomoTimer = ({ time, theme }) => {
  const showTime = (time) => {
    const min = parseInt(time / 60);
    const sec = parseInt(time % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <View style={styles.pomodoroContainer}>
      <Text style={[styles.pomoTimeContainer, { color: theme.iconColor }]}>
        {showTime(time)}
      </Text>
      <Text style={[styles.focusWarrio, { color: theme.iconColor }]}>
        Focus Warrior{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pomodoroContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  pomoTimeContainer: {
    fontSize: 70,
    fontWeight: 700,
  },
  
  focusWarrior: {
    fontSize: 20,
  },
});

export default PomoTimer;
