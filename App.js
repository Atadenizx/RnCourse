import { useState } from "react";
// we always import the usestate from the react, not react-native
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import uuid from "react-native-uuid";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";
import GoalModal from "./components/GoalModal";

// There is no style inheritince in css in react-native

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalGoal, setIsModalGoal] = useState({});
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(inputText) {
    setCourseGoals((prev) => [
      ...prev,
      {
        text: inputText,
        id: uuid.v4(),
        created_at: Date.now(),
      },
    ]);
  }

  function removeGoal(goalID) {
    const newGoals = courseGoals.filter((goal) => goal.id !== goalID);
    setCourseGoals(newGoals);
  }

  return (
    <View style={styles.appContainer}>
      <GoalModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalGoal={modalGoal}
      />

      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        {courseGoals.length ? (
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  itemData={itemData}
                  removeGoals={removeGoal}
                  setIsModalOpen={setIsModalOpen}
                  setIsModalGoal={setIsModalGoal}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        ) : (
          <Text>You have no goals, add a new goal.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    backgroundColor: "white",
  },
  goalsContainer: {
    flex: 6,
    // flexDirection: "column",
    // gap: 12,
    // marginTop: 24,
  },
});
