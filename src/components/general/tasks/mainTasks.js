import { View, StyleSheet, Text } from "react-native";
import ListCard from "./components/listCard";
import AddTaskCard from "./components/addtaskCard";

const MainTasks = () => {
  const listList = ["Lista1", "Lista2", "Lista3", "Lista4", "Lista5"];

  /*Functions Controllers List and Task */

  const addOrEditList = (values) => {
    
  };

  return (
    <View style={styles.mainTasksContainer}>
      <View style={styles.mainTaskSection}>
        {listList.map((title, i) => (
          <ListCard key={i} title={title} id={i} addOrEdit={addOrEditList} />
        ))}
        <AddTaskCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTasksContainer: {
    maxWidth: "100%",
    height: "100%",
  },
  mainTaskSection: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "3.5%",
  },
});

export default MainTasks;
