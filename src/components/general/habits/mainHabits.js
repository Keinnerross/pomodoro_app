import { View, StyleSheet } from "react-native";
import HabitCart from "./components/habitCard";

const MainHabits = () => {
  return (
    <View style={styles.MainHabitsContainer}>
      <HabitCart />
      <HabitCart />
      <HabitCart />
    </View>
  );
};

const styles = StyleSheet.create({
  MainHabitsContainer: {
    width: "100%",
    boxSizing: "content-box",
    backgroundColor: "gray",
  },
});

export default MainHabits;
