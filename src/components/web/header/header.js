import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Header = () => {
  const iconSize = 25;

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
              <Icon name="refresh" size={iconSize} color="white" />
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="notifications-outline"
                size={iconSize}
                color="white"
              />
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="person-circle-outline"
                size={iconSize}
                color="white"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 30,
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
    paddingLeft: "20%",
    flexDirection: "row",
  },

  iconContainer: {
    padding: 10,
    margin: 3,
  },
});

export default Header;
