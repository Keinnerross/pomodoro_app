import { View, StyleSheet } from "react-native";
import NavPomodoro from "./components/navPomodoro";
import ButtonsPomo from "./components/buttonsPomodoro";
import PomoTimer from "./components/pomodoroTimer";

const MainPomodoro = () => {
  return (
 

      <View style={styles.pomodoroMainContainer}>
        <NavPomodoro />
        <PomoTimer />
        <ButtonsPomo />
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
