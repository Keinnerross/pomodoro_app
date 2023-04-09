import { View, Text, StyleSheet, TextInput } from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";
const Task = ({ title, ifDone, id }) => {
  const themeSelect = themes[1];

  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };
  /*Los temas estan puestos aqui para poder testear los estilos, sin embargo hay que ponerlos de forma atomatica relacionadose con la sidebar */

  return (
    <View style={styles.taskContainer}>
      <TextInput
        style={{ color: configTheme.iconColor }}
        defaultValue={title}
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
