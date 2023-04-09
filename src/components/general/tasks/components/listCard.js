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
import { doc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import uuid from "react-native-uuid";

const ListCard = ({ id, listName }) => {
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

  /*Funcion de input del titulo de la lista */
  const handleInputChange = (e) => {
    const { value } = e.target;
    setValues(value);
    addList(values);
  };

  /*Funcion de input del titulo de la Tarea */
  const handleInputTask = (e) => {
    const { value } = e.target;
    setValues(value);
    console.log(values);
  };

  /*Función Obtener Tareas */
  const getTasks = (idList) => {
    onSnapshot(doc(db, "lists", idList), (query) => {
      const tareas = query.data().tasks;
      setTasks(tareas);
    });
  };

  /*Función Agregar nueva tarea. */
  const addNewTask = async (idList, tasks) => {
    try {
      const newTask = {
        id: uuid.v4(),
        taskName: tasks,
        done: false,
      };
      const docRef = doc(db, "lists", idList);
      await updateDoc(docRef, {
        tasks: arrayUnion(newTask), // Agregamos la tarea a la lista
      });
      console.log("add task success");
      getTasks(idList);
    } catch {
      console.log("Algo salió mal");
    }
  };

  useEffect(() => {
    getTasks(id);
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
          <Button onPress={() => addNewTask(id, values)}></Button>
        </View>
        {tasks.map((task, i) => {
          console.log(task.id);
          return (
            <Task
              style={{ color: configTheme.iconColor }}
              id={task.id}
              title={task.taskName}
              ifDone={task.done}
              key={i}
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
