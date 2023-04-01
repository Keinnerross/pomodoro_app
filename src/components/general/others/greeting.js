import { Text, View, StyleSheet } from "react-native";

const Greeting = () => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={{ color: "white", fontSize: 22 }}>Welcome KeinnerRoss</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    paddingBottom: 20,
  },
});

export default Greeting;
