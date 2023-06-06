import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListSettingMenu = ({ active, deleteList, idList }) => {
  return (
    <View style={active ? styles.listSettingContainer : { display: "none" }}>
      <View>
        <TouchableOpacity>
          <Text>Archive List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteList(idList)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listSettingContainer: {
    backgroundColor: "white",
    width: 100,
    padding: 7,
    position: "absolute",
    left: 265,
    top: 35,
  },
});
export default ListSettingMenu;
