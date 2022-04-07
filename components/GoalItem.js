import React from "react";import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ goal, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, goal.item.id)}>
      <View key={goal.item.id} style={styles.listItem}>
        <Text>{goal.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontWeight: "bold",
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
    margin: 3,
  },
});

export default GoalItem;
