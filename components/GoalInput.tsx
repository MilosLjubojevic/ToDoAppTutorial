import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface GoalInputProps {
  onAddGoal: (goalText: string) => void;
  visible: boolean;
  toggleModal: () => void;
}

export default function GoalInput(props: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    props.onAddGoal(enteredGoalText.trim());
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/toDoAppImage.png")}
        />
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Tvoj Cilj..."
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Dodaj" color="#AC79D4" />
          </View>
          <View style={styles.button}>
            <Button
              title="Ponisit"
              color="#D759DE"
              onPress={props.toggleModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    backgroundColor: "purple",
  },
  textInput: {
    borderWidth: 1,
    marginTop: 20,
    borderColor: "#D198D6",
    backgroundColor: "#D198D6",
    color: "white",
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "90%",
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 8,
  },
  button: {
    width: "40%",

    marginRight: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
