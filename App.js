import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [entredGoals, setEntredGoals] = useState("");
  const [couresGoal, setCoursGoals] = useState([]);
  const textChangerHandler = (enterdtext) => {
    setEntredGoals(enterdtext);
    console.log(enterdtext);
  };

  const addGoalshandler = () => {
    setCoursGoals([...couresGoal, entredGoals]);
    console.log(couresGoal);
  };
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topLayout}>
        <TextInput
          style={styles.inputStyles}
          placeholder='Cours Goal'
          onChangeText={textChangerHandler}
        />
        <Button title='Add' onPress={addGoalshandler} />
      </View>
      <View>
        {couresGoal.map((goal) => {
          return <Text id={goal}>{goal}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 30,
  },
  topLayout: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputStyles: {
    padding: 3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 3,
    width: "80%",
  },
});
