import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SidebarNav from "./SidebarNav/sidebarNav";
import Header from "./header/header";
import MainPomodoro from "../general/pomodoro/mainPomodoro";
import MainNews from "../general/news/mainNews";
import MainTasks from "../general/tasks/mainTasks";
import MainHabits from "../general/habits/mainHabits";
import Greeting from "../general/others/greeting";
import SettingsPomodoro from "../general/pomodoro/settingsPomodoro";

const DashboardTemplate = () => {
  const [settingResult, setSettingResult] = useState({
    pomodoro: null,
    short: null,
    long: null,
  });

  useEffect(() => {
    console.log("quepeochamo");
  }, [settingResult]);

  const updateSetting = (inputValues) => {
    setSettingResult({
      ...settingResult,
      pomodoro: inputValues.pomodoro,
      short: inputValues.short,
      long: inputValues.long,
    });
  };
  return (
    <View>
      {/*Tengo pensado maejar todas las ventanas de configuracion desde el loyout de sea forma puedo pasar los parametros de setting de manera global y al componente pomodoro */}

      <View style={styles.bgDashboard}>
        <View style={styles.bgSection}>
          <View style={styles.sidebarContainer}>
            <SidebarNav />
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
                    <MainPomodoro settingConfig={settingResult} />
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
      </View>
      <SettingsPomodoro updateSetting={updateSetting} />
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
    width: "4%",
  },
  appModuleContainer: {
    width: "96%",
    backgroundColor: "lightblue",
    paddingHorizontal: 80,
  },
  appModuleSection: {
    minWidth: "90%",
    height: "100%" /*Revisar */,
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
