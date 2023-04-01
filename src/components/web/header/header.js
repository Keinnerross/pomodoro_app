import { View, Text, StyleSheet, TextInput } from "react-native";
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
            <Icon name="search" size={15} color="gray" />
            <TextInput
              style={styles.textInput}
              placeholder="Search a task group"
            ></TextInput>
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
    alignItems: "center",
    justifyContent: "flex-end",
  },

  searchBar: {
    width: 350,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 7,
    paddingHorizontal: 10,
  },

  textInput: {
    width: "100%",
    color: "gray",
    marginLeft: 5,
    outlineWidth: 0,
  },
  userHeaderSection: {
    paddingLeft: 40,
    flexDirection: "row",
  },

  iconContainer: {
    padding: 10,
    margin: 3,
  },
});

export default Header;
