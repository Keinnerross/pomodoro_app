import { View, StyleSheet } from "react-native";
import TaskCard from "./components/taskCard";

const MainTasks = () => {
  return (
    <View style={styles.mainTasksContainer}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </View>
  );
};

const styles = StyleSheet.create({
  mainTasksContainer: {
    maxWidth: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 19,
    height: "100%",
  },
});

export default MainTasks;
