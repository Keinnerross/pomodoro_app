import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const ButtonsPomo = () => {
  const playIcon = <Icon name="play" size={30} color="#900" />;
  const reloadIcon = <Icon name="reload" size={30} color="#900" />;
  const stopIcon = <Icon name="stop" size={30} color="#900" />;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>{reloadIcon}</TouchableOpacity>
      <TouchableOpacity style={styles.button}>{playIcon}</TouchableOpacity>
      <TouchableOpacity style={styles.button}>{stopIcon}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  active: {
    backgroundColor: "#42a5f5",
  },
});

export default ButtonsPomo;
