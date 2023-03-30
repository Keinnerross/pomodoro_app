import { View, Text, StyleSheet } from "react-native";
// import { MdOutlineNotificationsNone } from "react-icons/md";
// import { FiRefreshCcw, FiUser } from "react-icons/fi";

const Header = () => {
  // const iconsSize = 28;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerSection}>
        <View style={styles.logoSection}>
          <Text>LOGOTYPE</Text>
        </View>
        <View style={styles.elementsHeaderSection}>
          <View style={styles.searchBar}>
            <Text>BUSCADOR</Text>
          </View>
          <View style={styles.userHeaderSection}>
            <View style={styles.iconContainer}>
              {/* <FiRefreshCcw size={iconsSize} /> */}
            </View>
            <View style={styles.iconContainer}>
              {/* <MdOutlineNotificationsNone size={iconsSize} /> */}
            </View>
            <View style={styles.iconContainer}>
              {/* <FiUser size={iconsSize} /> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  elementsHeaderSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  searchBar: {
    justifyContent: "center",
  },

  userHeaderSection: {
    paddingLeft: "30%",
    flexDirection: "row",
  },

  iconContainer: {
    padding: 10,
    // margin: "3px",
  },
});

export default Header;
