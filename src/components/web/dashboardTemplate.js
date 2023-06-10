import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import SidebarNav from "./SidebarNav/sidebarNav";
import Header from "./header/header";
import MainPomodoro from "../general/pomodoro/mainPomodoro";
import MainNews from "../general/news/mainNews";
import MainTasks from "../general/tasks/mainTasks";
import MainHabits from "../general/habits/mainHabits";
import SettingsPomodoro from "../general/pomodoro/settingsPomodoro";
import SelectTheme from "./SidebarNav/components/selectTheme";
import { themes } from "../general/userTemplates/mainUserTemplates";

const DashboardTemplate = () => {
  const [activeBrush, setActiveBrush] = useState(false);

  const [settingPomoOpen, setSettingPomoOpen] = useState(false);
  const [settingResult, setSettingResult] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
  });

  /*Functions */
  const updateSetting = (inputValues) => {
    setSettingResult({
      ...settingResult,
      pomodoro: inputValues.pomodoro,
      short: inputValues.short,
      long: inputValues.long,
    });
    setSettingPomoOpen(false);
  };

  const ifOpenPomo = (value) => {
    setSettingPomoOpen(value);
  };

  /*Functions Sidebar */
  /*Brush */

  const ifActiveBrush = () => {
    setActiveBrush(!activeBrush);
  };

  return (
    <View>
      {/*Tengo pensado maejar todas las ventanas de configuracion desde el loyout de sea forma puedo pasar los parametros de setting de manera global y al componente pomodoro */}
      <SelectTheme isActive={activeBrush} />
      <ImageBackground
        // source={{
        //   uri: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // }}
        style={styles.bgDashboard}
      >
        <View style={styles.bgSection}>
          <View style={styles.sidebarContainer}>
            <SidebarNav theme={themes} ifActive={ifActiveBrush} />
          </View>
          <View style={styles.appModuleContainer}>
            <View style={styles.HeaderContainer}>
              <Header />
            </View>
            <View style={styles.appModuleSection}>
              <View style={styles.appGadgetsContainer}>
                <View style={styles.pomodoroContainer}>
                  <MainPomodoro
                    ifOpen={ifOpenPomo}
                    settingConfig={settingResult}
                  />
                </View>
                <View style={styles.TasksViewContainer}>
                  <MainTasks />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <SettingsPomodoro
        closeSetting={ifOpenPomo}
        ifOpen={settingPomoOpen}
        updateSetting={updateSetting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgDashboard: {
    width: "100vw",
    maxWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: "#181818",
    // width: "100%",
    // height: "100%",
  },
  bgSection: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  HeaderContainer: {
    width: "95%",
  },

  sidebarContainer: {
    width: 62,
  },
  appModuleContainer: {
    // backgroundColor: "red",
    flex: 1,
  },
  appGadgetsContainer: {},
  appModuleSection: {},

  dropPomoContainer: {
    flexDirection: "row",
  },

  pomodoroContainer: {
    alignItems: "center",
  },

  TasksViewContainer: {
    flex: 1,
    marginTop: 25,
  },
});

export default DashboardTemplate;
