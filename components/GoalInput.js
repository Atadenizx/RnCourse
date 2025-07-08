import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ addGoalHandler }) {
  const [inputText, setInputText] = useState("");

  function goalInputHandler(enteredText) {
    setInputText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={inputText}
        onChangeText={goalInputHandler}
      />
      <Button
        title="Submit"
        style={styles.textInputBtn}
        onPress={() => {
          addGoalHandler(inputText);
          return setInputText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    width: "80%",
    padding: 8,
  },
  textInputBtn: {
    textAlign: "center",
  },
});
