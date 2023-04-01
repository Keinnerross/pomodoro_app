import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View, Image, StyleSheet } from "react-native";
import { wallpapers } from "../../../general/userTemplates/mainUserTemplates";

const SelectTheme = () => {
  useEffect(() => {
    console.log(wallpapers[0].wallpaper);
  }, []);

  return (
    <View style={styles.selectThemeContainer}>
      <View style={styles.selectThemeSection}>
        <Text>Theme</Text>
        <View style={styles.customItemsSection}>
          <TouchableOpacity style={styles.theme1}></TouchableOpacity>
          <TouchableOpacity style={styles.theme2}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.selectThemeSection}>
        <Text>Wallpapers</Text>
        <View style={styles.customItemsSection}>
          {wallpapers.map((wallpapers, i) => (
            <TouchableOpacity key={i}>
              <Image
                style={styles.wallpaperBtn}
                source={{ uri: `${wallpapers.wallpaper}` }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SelectTheme;

const styles = StyleSheet.create({
  selectThemeContainer: {
    width: 400,
    height: 250,
    backgroundColor: "red",
    position: "absolute",
    top: 60,
    left: 62,
    zIndex: 5,
    borderRadius: 7,
  },
  selectThemeSection: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 20,
  },
  customItemsSection: {
    flexDirection: "row",
    gap: 10,
  },
  wallpaperBtn: {
    width: 50,
    height: 50,
    borderRadius: 7,
  },

  theme1: {
    width: 50,
    height: 50,
    borderRadius: 7,
    backgroundColor: "white",
  },
  theme2: {
    width: 50,
    height: 50,
    borderRadius: 7,
    backgroundColor: "black",
  },
});
