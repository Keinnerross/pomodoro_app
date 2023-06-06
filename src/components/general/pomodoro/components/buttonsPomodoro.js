import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ButtonsPomo = ({ playPomo, restPomo, stopPomo }) => {
  const playIcon = <Icon name="play" size={30} color="white" />;
  const reloadIcon = <Icon name="reload" size={25} color="white" />;
  const stopIcon = <Icon name="stop" size={25} color="white" />;

  const ifRestPomo = () => {
    restPomo(); /*Agregar Condicional */
  };

  const ifStopPomo = () => {
    stopPomo(); /*Agregar Condicional */
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => ifRestPomo()}>
        {reloadIcon}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: 60, height: 60 }]}
        onPress={() => playPomo()}
      >
        {playIcon}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => ifStopPomo()}>
        {stopIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: "#900",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  active: {
    backgroundColor: "#42a5f5",
  },
});

export default ButtonsPomo;
