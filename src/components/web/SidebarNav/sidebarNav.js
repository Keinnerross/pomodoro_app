import { View, StyleSheet, TouchableOpacity } from "react-native";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { TbPaintFilled } from "react-icons/tb";
// import { MdLanguage } from "react-icons/md";
// import { BiHelpCircle } from "react-icons/bi";
// import { AiFillSetting } from "react-icons/ai";
// import { RiLogoutBoxRLine } from "react-icons/ri";

const SidebarNav = () => {
  // const iconSize = 25;

  return (
    <View style={styles.sidebarMain}>
      <View style={styles.sidebarSection}>
        <View style={styles.navSection}>
          <View style={styles.iconContainer}></View>
          <View style={styles.iconContainer}>
            {/* <TbPaintFilled size={iconSize} /> */}
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            {/* <MdLanguage size={iconSize} /> */}
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            {/* <BiHelpCircle size={iconSize} /> */}
          </View>
        </View>
        <View style={styles.settingSection}>
          <View style={styles.iconContainer}>
            {/* <AiFillSetting size={iconSize} /> */}
          </View>
          <View style={styles.iconContainer}>
            {/* <RiLogoutBoxRLine size={iconSize} /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarMain: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "yellow",
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
