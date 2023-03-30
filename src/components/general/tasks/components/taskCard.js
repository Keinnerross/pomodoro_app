import { View, StyleSheet, Text } from "react-native";

const TaskCard = () => {
  return (
    <View style={styles.TaskCardContainer}>
      <Text>Soy el component de tarea</Text>
    </View>
  );
};

/*Hay que arreglar los estilos para que coincidan bien en una grilla     */
const styles = StyleSheet.create({
  TaskCardContainer: {
    width: "31%",
    backgroundColor: "white",
    // marginRight: "2.3%",
    // marginBottom: "2%",
  },
});
export default TaskCard;
