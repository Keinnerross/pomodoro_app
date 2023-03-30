import { View, Text, StyleSheet } from "react-native";
import SidebarNav from "./SidebarNav/sidebarNav";
import Header from "./header/header";
import MainPomodoro from "../general/pomodoro/mainPomodoro";
import MainNews from "../general/news/mainNews";
import MainTasks from "../general/tasks/mainTasks";
import MainHabits from "../general/habits/mainHabits";
const DashboardTemplate = () => {
  return (
    <View>
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
                  <Text>Hello</Text>
                  <View style={styles.PomoNewsContainer}>
                    <MainPomodoro />
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
    </View>
  );
};

const styles = StyleSheet.create({
  bgDashboard: {
    width: "100%",
    height: "100%",
  },
  bgSection: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  sidebarContainer: {
    width: "4%",
    height: "100%",
  },
  appModuleContainer: {
    width: "96%",
    backgroundColor: "green",
    alignItems: "center",
  },
  appModuleSection: {
    width: "90%",
    backgroundColor: "pink",
  },
  PomoNewsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  appGadgetsContainer: {
    flexDirection: "row",
  },
});

export default DashboardTemplate;
