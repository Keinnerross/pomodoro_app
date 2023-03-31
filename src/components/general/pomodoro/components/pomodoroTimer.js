import { View, Text, StyleSheet } from "react-native";

const PomoTimer = ({ time }) => {
  const showTime = (time) => {
    const min = parseInt(time / 60);
    const sec = parseInt(time % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <>
      <View style={styles.pomodoroContainer}>
        <Text style={styles.pomoTimeContainer}>{showTime(time)}</Text>
        <Text style={styles.focusWarrior}>Focus Warrior </Text>
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
