import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import SidebarNav from "./SidebarNav/sidebarNav";
import Header from "./header/header";
import MainPomodoro from "../general/pomodoro/mainPomodoro";
import MainNews from "../general/news/mainNews";
import MainTasks from "../general/tasks/mainTasks";
import MainHabits from "../general/habits/mainHabits";
import Greeting from "../general/others/greeting";
import SettingsPomodoro from "../general/pomodoro/settingsPomodoro";
import SelectTheme from "./SidebarNav/components/selectTheme";
import { themes } from "../general/userTemplates/mainUserTemplates";

const DashboardTemplate = () => {
  const [settingPomoOpen, setSettingPomoOpen] = useState(false);
  const [settingResult, setSettingResult] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
  });

  const updateSetting = (inputValues) => {
    setSettingResult({
      ...settingResult,
      pomodoro: inputValues.pomodoro,
      short: inputValues.short,
      long: inputValues.long,
    });
  };

  const ifOpenPomo = (value) => {
    setSettingPomoOpen(value);
  };
  return (
    <View>
      {/*Tengo pensado maejar todas las ventanas de configuracion desde el loyout de sea forma puedo pasar los parametros de setting de manera global y al componente pomodoro */}
      <SelectTheme />
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={styles.bgDashboard}
      >
        <View style={styles.bgSection}>
          <View style={styles.sidebarContainer}>
            <SidebarNav theme={themes} />
          </View>
          <View style={styles.appModuleContainer}>
            <View style={styles.appModuleSection}>
              <View style={styles.HeaderContainer}>
                <Header />
              </View>
              <View style={styles.appGadgetsContainer}>
                <View style={styles.appGadgetsSection}>
                  <Greeting />
                  <View style={styles.PomoNewsContainer}>
                    <MainPomodoro
                      ifOpen={ifOpenPomo}
                      settingConfig={settingResult}
                    />
                    <MainNews />
                  </View>
                  <View style={styles.TasksViewContainer}>
                    <MainTasks />
                  </View>
                </View>
                <View style={styles.HabitsViewContainer}>
                  <MainHabits />
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
    height: "100vh",
    // width: "100%",
    // height: "100%",
  },
  bgSection: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  sidebarContainer: {
    width: 62,
  },
  appModuleContainer: {
    flex: 1,
    paddingHorizontal: 80,
  },
  appModuleSection: {
    minWidth: "90%",
  },
  PomoNewsContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  appGadgetsContainer: {
    maxWidth: "100%",
    flexDirection: "row",
  },

  appGadgetsSection: {
    width: "72%",
  },
  TasksViewContainer: {
    width: "100%",
    backgroundColor: "brown",
    marginTop: 20,
  },
  HabitsViewContainer: {
    width: "26%",
    marginLeft: "2%",
  },
});

export default DashboardTemplate;
