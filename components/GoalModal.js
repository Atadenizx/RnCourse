import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalModal({ isModalOpen, setIsModalOpen, modalGoal }) {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View>
        <Text>Modal is on2</Text>
        <Text>{new Date(modalGoal.created_at).toLocaleDateString()}</Text>
        <Button
          title="close"
          color="red"
          onPress={() => setIsModalOpen(false)}
        />
      </View>
    </Modal>
  );
}
