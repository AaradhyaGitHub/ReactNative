import { StyleSheet } from "react-native";

export default function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={{ color: "black" }}>✓ {itemData.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#0cbc4935",
    color: "black"
  }
});
