import React, { useState } from "react";import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
const GoalInput = ({ addGoalshandler, visible, onCancel }) => {
  const [entredGoals, setEntredGoals] = useState("");
  const textChangerHandler = (enterdtext) => {
    setEntredGoals(enterdtext);
  };

  const addGoals = () => {
    addGoalshandler(entredGoals);
    setEntredGoals("");
  };
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.topLayout}>
        <TextInput
          style={styles.inputStyles}
          placeholder='Cours Goal'
          onChangeText={textChangerHandler}
          value={entredGoals}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoals} />
          </View>
          <View style={styles.button}>
            <Button title='cancel' color='gray' onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  topLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyles: {
    padding: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "80%",
  },
  ButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "20%",
  },
});

export default GoalInput;
