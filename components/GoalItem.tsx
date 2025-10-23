import { Pressable, StyleSheet, Text, View } from "react-native";
interface GoalItemProps {
  id: string;
  item: string;
  onDeleteGoal: () => void;
}

function GoalItem(props: GoalItemProps) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd", borderless: false }}
      onPress={props.onDeleteGoal}
    >
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
    backgroundColor: "#DE59EB",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
