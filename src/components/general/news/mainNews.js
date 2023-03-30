import { View, StyleSheet, Text } from "react-native";

const MainNews = () => {
  return (
    <View style={styles.viewLevelContainer}>
      <View style={styles.settingLevelBtnSection}>
        <Text>LEVEL 1</Text>
      </View>
      {/* <BadgeLevel />
      <LevelNotice /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewLevelContainer: {
    backgroundColor: "orange",
    width: "32%",
  },
});

export default MainNews;
