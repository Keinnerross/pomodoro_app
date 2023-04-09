import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";
import Icon from "react-native-vector-icons/Ionicons";
import Task from "./taskComponent";
import { Button } from "react-native-web";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";

const ListCard = ({ id, listName }) => {
  let taskArr = ["tarea1", "tarea2", "tarea3"];

  const themeSelect = themes[1];
  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };
  /*Los temas estan puestos aqui para poder testear los estilos, sin embargo hay que ponerlos de forma atomatica relacionadose con la sidebar */

  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValues(value);
    addList(values);
  };

  const handleInputTask = (e) => {
    const { value } = e.target;
    setValues(value);
    console.log(values);
  };

  const addNewTask = async (idtask, task) => {
    try {
      const docRef = doc(db, "lists", idtask);
      await updateDoc(
        docRef,
        {
          tasks: firebase.firestore.FieldValue.arrayUnion(task), // Agregamos la tarea a la lista
        },
        { merge: true }
      );
      console.log("add task success");
      getData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View
      style={[
        styles.TaskCardContainer,
        { backgroundColor: configTheme.themeColor },
      ]}
    >
      <View style={styles.titleListSection}>
        <TextInput
          style={{ color: configTheme.iconColor, fontSize: 20 }}
          defaultValue={listName} /*Por corregir */
          onChange={handleInputChange}
        />

        <TouchableOpacity>
          <Icon
            name="ellipsis-horizontal-outline"
            color={configTheme.iconColor}
            size={16}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.taskListSection}>
        <View style={styles.addTaskSection}>
          <TextInput
            style={{ color: configTheme.iconColor }}
            defaultValue="Add a Task"
            onChange={handleInputTask}
          />
          <Button onPress={() => addNewTask(id, values)}></Button>
        </View>
        {taskArr.map((task, i) => (
          <Task style={{ color: configTheme.iconColor }} title={task} key={i} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TaskCardContainer: {
    width: "31%",
    padding: 15,
    marginBottom: "3%",
    borderRadius: 6,
  },

  titleListSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  addTaskSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default ListCard;
