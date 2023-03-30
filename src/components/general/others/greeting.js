import { Text, View, StyleSheet } from "react-native";

const Greeting = () => {
  return (
    <View style={styles.greetingContainer}>
      <Text>Hello Warrior</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    paddingVertical: 20,
  },
});

export default Greeting;
