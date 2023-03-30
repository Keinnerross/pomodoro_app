import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const SettingsPomodoro = () => {
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
            // defaultValue={pomoSetting}
            style={styles.input}
            // onChangeText={(text) => {
            //   setInputValue({ ...inputValue, pomodoro: text });
            //   console.log(inputValue);
            // }}
          />
        </View>
        <View style={styles.valuePomos}>
          <Text>Short Break</Text>
          <TextInput
            // defaultValue={shortBreak}
            style={styles.input}
            keyboardType="numeric"
            // onChangeText={(text) => {
            //   setInputValue({ ...inputValue, short: text });
            //   console.log(inputValue);
            // }}
          />
        </View>
        <View style={styles.valuePomos}>
          <Text>Long Break</Text>
          <TextInput
            // defaultValue={longBreak}
            style={styles.input}
            keyboardType="numeric"
            // onChangeText={(text) => {
            //   setInputValue({ ...inputValue, long: text });
            //   console.log(inputValue);
            // }}
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
        <TouchableOpacity
        // onPress={updateSetting}
        >
          <Text style={styles.doneButton}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingMain: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  settingContainer: {
    backgroundColor: "#fff",
  },
});

export default SettingsPomodoro;
