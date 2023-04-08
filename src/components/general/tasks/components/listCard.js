import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";
import Icon from "react-native-vector-icons/Ionicons";
import Task from "./taskComponent";

const ListCard = ({ id, addOrEdit }) => {
  let taskArr = ["tarea1", "tarea2", "tarea3"];

  const themeSelect = themes[1];
  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };
  /*Los temas estan puestos aqui para poder testear los estilos, sin embargo hay que ponerlos de forma atomatica relacionadose con la sidebar */

  const [values, setValues] = useState({
    id: "",
    titleList: "",
  });

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValues({ ...values, id: id, titleList: value });
    addOrEdit(values);
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
          defaultValue={"Lista"}
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
    backgroundColor: "wh",
    padding: 15,
    marginBottom: "3%",
    borderRadius: 6,
  },

  titleListSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
export default ListCard;
