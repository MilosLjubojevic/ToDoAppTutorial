import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

interface Goal {
  id: string;
  text: string;
}
export default function Index() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {" "}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              onDeleteGoal={() => deleteGoalHandler(itemData.item.id)}
              item={itemData.item.text}
              id={itemData.item.id}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "80%",
    marginRight: 10,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
