import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  CheckBox,
} from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";
import { db } from "../../../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Task = ({ title, ifDone, idTask, idList, render }) => {
  const themeSelect = themes[1];

  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };
  /*Los temas estan puestos aqui para poder testear los estilos, sin embargo hay que ponerlos de forma atomatica relacionadose con la sidebar */
  /**Funcion para actualizar el Nombre de una tarea */

  const [checkValue, setCheckValue] = useState(false);
  const updateName = async (idLista, idTarea, newTaskName) => {
    try {
      const task = doc(db, "lists", idLista, "tasks", idTarea);
      await updateDoc(task, {
        taskName: newTaskName,
      });
    } catch (e) {
      console.log("error:", e, idLista, idTask);
    }
  };

  const handleInputName = (e) => {
    const { value } = e.target;
    updateName(idList, idTask, value);
  };

  /**Funcion para actualizar el completado de una tarea */
  const handleCheck = async (idLista, idTarea) => {
    try {
      const task = doc(db, "lists", idLista, "tasks", idTarea);
      const queryChecked = await getDoc(task);
      const value = queryChecked.data().done ? false : true;
      setCheckValue(value);
    } catch (e) {
      console.log(e);
    }
  };

  const updateCheck = async (idLista, idTarea, value) => {
    const task = doc(db, "lists", idLista, "tasks", idTarea);
    console.log("ejecutada");
    await updateDoc(task, {
      done: value,
    });
  };

  useEffect(() => {
    updateCheck(idList, idTask, checkValue);
  }, [checkValue]);

  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskTitleSection}>
        <CheckBox
          style={{ marginRight: 5 }}
          value={checkValue}
          onValueChange={() => handleCheck(idList, idTask)}
        ></CheckBox>
        <TextInput
          style={[styles.inputTitleTask, { color: configTheme.iconColor }]}
          defaultValue={title}
          onChange={handleInputName}
        />
      </View>

      <TouchableOpacity>
        <Icon
          name="ellipsis-horizontal-outline"
          color={configTheme.iconColor}
          size={16}
        />
      </TouchableOpacity>
      {/* <Text style={{ color: configTheme.iconColor }}>CheckInput</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  taskTitleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  inputTitleTask: {
    width: 120,
  },
});

export default Task;
