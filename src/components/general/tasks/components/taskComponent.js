import { View, Text, StyleSheet, TextInput } from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";
import { db } from "../../../../../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

const Task = ({ title, ifDone, id, idList }) => {
  const themeSelect = themes[1];

  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };
  /*Los temas estan puestos aqui para poder testear los estilos, sin embargo hay que ponerlos de forma atomatica relacionadose con la sidebar */

  const updateName = async (idLista, idTask, newTaskName) => {
    try {
      const listRef = onSnapshot(doc(db, "lists", idLista), (query) => {
        const tasks = query.data().tasks;
      });
    } catch (e) {
      console.log("error:", e, idLista, idTask);
    }
  };

  const handleInputName = (e) => {
    const { value } = e.target;
    updateName(idList, id, value);
  };

  return (
    <View style={styles.taskContainer}>
      <TextInput
        style={{ color: configTheme.iconColor }}
        defaultValue={title}
        onChange={handleInputName}
      />
      <Text style={{ color: configTheme.iconColor }}>CheckInput</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
});

export default Task;
