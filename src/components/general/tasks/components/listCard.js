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

const ListCard = ({
  idList,
  listName,
  updateList,
  deleteLista,
  tasksDt,
  // addNewTaskProp,
}) => {
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
  // ESTAMOS EL PRUEBAAAA!!!!!!!!!!!!!!!!!

  // /*Función Obtener Tareas */
  // const getTasks = async (idList) => {
  //   try {
  //     const tasks = [];
  //     const q = query(
  //       collection(db, "lists", idList, "tasks"),
  //       orderBy("order", "desc")
  //     );

  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.docs.map((doc) => {
  //       tasks.push({ ...doc.data(), taskId: doc.id });
  //     });
  //     setTasks(tasks);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // ESTAMOS EN PRUEBAAAA!!!!!!!!!!!!!!!!

  const altura = (Math.floor(Math.random() * 5) + 1) * 100;
  console.log(altura);

  return (
    <View
      style={[
        styles.TaskCardContainer,
        {
          backgroundColor: configTheme.themeColor,
          minHeight: altura,
          height: altura,
          maxHeight: altura,
          margin: 6,
        },
      ]}
    >
      <ListSettingMenu
        active={settingActive}
        // deleteList={deleteLista(idList)}
        idList={idList}
      />
      <View style={styles.titleListSection}>
        <TextInput
          style={[styles.inputTextList, { color: configTheme.iconColor }]}
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
            style={[styles.addTaskInput, { color: configTheme.iconColor }]}
            defaultValue="Add a Task"
            onChange={handleInputTask}
          />
          <Button onPress={() => addNewTaskProp(idList, values)}></Button>
        </View>

        {tasksDt
          ? tasksDt.map((task, i) => {
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
            })
          : console.log("noapasaonaa")}
        {/* Por Corregir el condicional
         */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TaskCardContainer: {
    width: 250,
    minWidth: 250,
    padding: 15,
  },

  titleListSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    width: "100%",
  },

  inputTextList: {
    maxWidth: 120,
    fontSize: 20,
  },

  addTaskInput: {
    maxWidth: 120,
    fontSize: 16,
  },

  addTaskSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
export default ListCard;
