import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [couresGoal, setCoursGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const addGoalshandler = (goalTitle) => {
    setCoursGoals([...couresGoal, { value: goalTitle, id: Math.random() }]);
    setShowModal(false);
  };

  const deleteItemHandler = (goalId) => {
    setCoursGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };

  const CancelHandler = () => {
    setShowModal(false);
  };
  return (
    <View style={styles.mainWrapper}>
      <Button title='Add Goal' onPress={() => setShowModal(true)} />
      <GoalInput
        visible={showModal}
        addGoalshandler={addGoalshandler}
        onCancel={CancelHandler}
      />
      <FlatList
        data={couresGoal}
        renderItem={(goal) => (
          <GoalItem goal={goal} onDelete={deleteItemHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 30,
  },
});
