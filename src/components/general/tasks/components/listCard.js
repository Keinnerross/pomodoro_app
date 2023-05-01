import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";
import Icon from "react-native-vector-icons/Ionicons";
import Task from "./taskComponent";
import { db } from "../../../../../firebase";
import {
  doc,
  query,
  getDocs,
  orderBy,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import uuid from "react-native-uuid";
import ListSettingMenu from "./listSettingMenu";

const ListCard = ({ idList, listName, updateList, render }) => {
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
  const [settingActive, setSettingActive] = useState(false);
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
      const q = query(
        collection(db, "lists", idList, "tasks"),
        orderBy("order", "desc")
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.docs.map((doc) => {
        tasks.push({ ...doc.data(), taskId: doc.id });
      });
      setTasks(tasks);
    } catch (e) {
      console.log(e);
    }
  };

  /*Función Agregar nueva tarea. */
  const addNewTask = async (idList, tasksName) => {
    const orderValue = tasks.length + 1;
    try {
      const newTask = {
        taskName: tasksName,
        done: false,
        order: orderValue,
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

  /*Función completar tarea */

  /*Función del menú de la lista: Borrar Lista */

  const deleteList = async (id) => {
    const q = collection(db, "lists");
    const list = doc(q, id);
    try {
      await deleteDoc(list);
      render();
    } catch {
      console.log("Algo salió mal.");
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
      <ListSettingMenu
        active={settingActive}
        deleteList={deleteList}
        idList={idList}
      />
      <View style={styles.titleListSection}>
        <TextInput
          style={{ color: configTheme.iconColor, fontSize: 20 }}
          defaultValue={listName} /*Por corregir */
          onChange={handleInputChange}
        />

        <TouchableOpacity onPress={() => setSettingActive(!settingActive)}>
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
              idTask={task.taskId}
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
