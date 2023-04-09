import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { themes } from "../../userTemplates/mainUserTemplates";

const AddListCard = ({ addList }) => {
  const [values, setValues] = useState("");

  const themeSelect = themes[1];

  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValues(value);
    console.log(value);
  };

  return (
    <View
      style={[
        styles.addListContainer,
        { backgroundColor: configTheme.themeColor },
      ]}
    >
      <TextInput
        style={{ color: configTheme.iconColor }}
        defaultValue="+ New List"
        onChange={handleInputChange}
      />
      <TouchableOpacity onPress={() => addList(values)}>
        <Text style={{ color: configTheme.iconColor }}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addListContainer: {
    width: "31%",
    height: 50,
    padding: 15,
    marginBottom: "3%",
    borderRadius: 6,
  },
});
export default AddListCard;
