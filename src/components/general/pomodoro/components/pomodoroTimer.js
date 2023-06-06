import { View, Text, StyleSheet } from "react-native";

const PomoTimer = ({ time, theme }) => {
  const showTime = (time) => {
    const min = parseInt(time / 60);
    const sec = parseInt(time % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <>
      <View style={styles.pomodoroContainer}>
        <Text style={[styles.pomoTimeContainer, { color: theme.iconColor }]}>
          {showTime(time)}
        </Text>
        <Text style={styles.focusWarrior}>Focus Warrior </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pomodoroContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pomoNav: {},
  pomoTimeContainer: {
    fontSize: 80,
  },
  cycleView: {
    fontSize: 30,
  },
  focusWarrior: {
    fontSize: 20,
  },
  pomoBarContainer: {
    width: 250,
    height: 20,
    borderRadius: 10,
  },
});

export default PomoTimer;
