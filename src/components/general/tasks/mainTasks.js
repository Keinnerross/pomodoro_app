import { View, StyleSheet } from "react-native";
import TaskCard from "./components/taskCard";

const MainTasks = () => {
  return (
    <View style={styles.mainTasksContainer}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />

      <TaskCard />

      <TaskCard />
    </View>
  );
};

const styles = StyleSheet.create({
  mainTasksContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default MainTasks;
