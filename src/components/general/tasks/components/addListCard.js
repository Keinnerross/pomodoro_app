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
        defaultValue="+ New xd"
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
    width: "60%",
    height: 50,
    marginBottom: 20,
    borderRadius: 9,
  },
});
export default AddListCard;
