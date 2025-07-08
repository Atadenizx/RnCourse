import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItems({
  itemData,
  removeGoals,
  setIsModalOpen,
  setIsModalGoal,
}) {
  return (
    <Pressable
      onPress={() => {
        setIsModalGoal(itemData.item);
        setIsModalOpen(true);
      }}
    >
      <View style={styles.courseGoalsItemContainer}>
        <Text
          style={{
            color: "black",
          }}
        >
          {itemData.item.text}
        </Text>
        <Button
          title="Delete"
          color="red"
          onPress={() => {
            removeGoals(itemData.item.id);
          }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  courseGoalsItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    marginBottom: 12,
  },
});
