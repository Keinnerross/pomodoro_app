import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

const SettingsPomodoro = ({ updateSetting }) => {
  const [inputValues, setInputValues] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
  });

  useEffect(() => {
    updateSetting(inputValues);
  }, []);

  return (
    <View style={styles.settingMain}>
      <View style={styles.settingContainer}>
        <View style={styles.titleCloseSetting}>
          <Text>Time Setting</Text>
          <TouchableOpacity
          //    onPress={settingShow}
          >
            <Text>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.valuePomos}>
          <Text>Pomodoro</Text>
          <TextInput
            style={styles.input}
            defaultValue={25}
            onChangeText={(text) => {
              setInputValues({ ...inputValues, pomodoro: text });
              console.log(inputValues.pomodoro);
            }}
          />
        </View>
        <View style={styles.valuePomos}>
          <Text>Short Break</Text>
          <TextInput
            defaultValue={5}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => {
              setInputValues({ ...inputValues, short: text });
              console.log(inputValues.short);
            }}
          />
        </View>
        <View style={styles.valuePomos}>
          <Text>Long Break</Text>
          <TextInput
            defaultValue={15}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => {
              setInputValues({ ...inputValues, long: text });
              console.log(inputValues.long);
            }}
          />
        </View>
        <View style={styles.valuePomos}>
          <Text>Sound Setting</Text>
          <View
            // selectedValue={changeSound}
            // onValueChange={(value) => changeSound(value)}
            style={styles.picker}
          >
            <TextInput label="Epic 1" value="1" />
            <TextInput label="Epic 2" value="2" />
            <TextInput label="Epic 3" value="3" />
            <TextInput label="Clasic Alarm" value="0" />
          </View>
        </View>
        <TouchableOpacity onPress={() => updateSetting(inputValues)}>
          <Text style={styles.doneButton}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingMain: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  settingContainer: {
    backgroundColor: "#fff",
  },
});

export default SettingsPomodoro;
