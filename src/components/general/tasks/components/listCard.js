import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";
import Icon from "react-native-vector-icons/Ionicons";
import Task from "./taskComponent";
import { db } from "../../../../../firebase";
import { doc, getDocs, orderBy, collection, addDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const ListCard = ({ idList, listName, updateList }) => {
  /*Configuracion Theme */
  const themeSelect = themes[1];
  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };
  /*Los temas estan puestos aqui para poder testear los estilos, sin embargo hay que ponerlos de forma atomatica relacionadose con la sidebar */

  /*Controles de lista y tareas */

  const [values, setValues] = useState("");
  const [tasks, setTasks] = useState([]);

  /*Funcion de input del titulo actualizacion del nombre de la lista */
  const handleInputChange = (e) => {
    const { value } = e.target;
    updateList(value, idList);
  };

  /*Funcion de input del titulo de la Tarea */
  const handleInputTask = (e) => {
    const { value } = e.target;
    console.log(value);
    setValues(value);
  };

  /*Función Obtener Tareas */
  const getTasks = async (idList) => {
    try {
      const tasks = [];
      const querySnapshot = await getDocs(
        collection(db, "lists", idList, "tasks")
      );
      querySnapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), taskId: doc.id });
      });
      console.log(tasks);
      const order = tasks.sort((x, y) => x.taskName.localeCompare(y.taskName));
      setTasks(order);
    } catch (e) {
      console.log(e);
    }
  };

  /*Función Agregar nueva tarea. */
  const addNewTask = async (idList, tasks) => {
    try {
      const newTask = {
        taskName: tasks,
        done: false,
      };
      const docRef = doc(db, "lists", idList);
      const tasksColl = collection(docRef, "tasks");
      await addDoc(tasksColl, newTask);
      getTasks(idList);
      console.log(`${newTask} se ha enviado con éxito`);
    } catch (e) {
      console.log("Algo salió mal", e);
    }
  };

  useEffect(() => {
    getTasks(idList);
  }, []);

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
          <Button onPress={() => addNewTask(idList, values)}></Button>
        </View>
        {tasks.map((task, i) => {
          return (
            <Task
              style={{ color: configTheme.iconColor }}
              id={task.taskId}
              title={task.taskName}
              ifDone={task.done}
              idList={idList}
              key={task.taskId}
            />
          );
        })}
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
