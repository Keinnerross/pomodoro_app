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
    boxSizing: "content-box",
    backgroundColor: "gray",
    // marginLeft: "1%",
  },
});

export default MainHabits;
