import { Pressable, StyleSheet, Text, View } from "react-native";
interface GoalItemProps {
  id: string;
  item: string;
  onDeleteGoal: () => void;
}

function GoalItem(props: GoalItemProps) {
  return (
    <Pressable onPress={props.onDeleteGoal}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
