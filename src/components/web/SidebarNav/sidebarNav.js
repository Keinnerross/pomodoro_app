import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const SidebarNav = ({ theme }) => {
  const themeSelect = theme[0];

  const configTheme = {
    themeColor: themeSelect.themeColor,
    iconSize: 25,
    iconColor: themeSelect.iconColor,
  };

  return (
    <View
      style={[styles.sidebarMain, { backgroundColor: configTheme.themeColor }]}
    >
      <View style={styles.sidebarSection}>
        <View style={styles.navSection}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              name="menu"
              size={configTheme.iconSize}
              color={configTheme.iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              name="brush"
              size={configTheme.iconSize}
              color={configTheme.iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              name="globe"
              size={configTheme.iconSize}
              color={configTheme.iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              name="help"
              size={configTheme.iconSize}
              color={configTheme.iconColor}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.settingSection}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              name="settings"
              size={configTheme.iconSize}
              color={configTheme.iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              name="log-out"
              size={configTheme.iconSize}
              color={configTheme.iconColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarMain: {
    width: "100%",
    minHeight: "100%",
  },
  sidebarSection: {
    alignItems: "center",
    height: "100%",
    paddingBottom: "50%",
  },

  navSection: {
    height: "70%",
  },

  settingSection: {
    height: "30%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  iconContainer: {
    padding: 10,
    // margin: "3px",
  },
});

export default SidebarNav;
