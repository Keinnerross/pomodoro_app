import { View, Text, StyleSheet } from "react-native";

const Header = () => {
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
            <View style={styles.iconContainer}></View>
            <View style={styles.iconContainer}></View>
            <View style={styles.iconContainer}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "green",
    paddingVertical: 25,
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
    margin: 3,
  },
});

export default Header;
