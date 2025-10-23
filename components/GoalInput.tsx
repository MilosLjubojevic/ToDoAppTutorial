import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface GoalInputProps {
  onAddGoal: (goalText: string) => void;
}

export default function GoalInput({ onAddGoal }: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log("GoalInput received onAddGoal:", typeof onAddGoal);
    if (enteredGoalText.trim().length === 0) return;
    onAddGoal(enteredGoalText.trim());
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Tvoj Cilj..."
      />
      <Button onPress={addGoalHandler} title="Dodaj" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "75%",
    marginRight: 10,
  },
});
