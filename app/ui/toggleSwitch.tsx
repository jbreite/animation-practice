import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const data = ["Buy", "Sell", "Convert"];

export default function ToggleSwitch() {
  const [selected, setSelected] = useState(0);

  const getChipStyle = (index: number) => {
    return [
      styles.chip,
      { backgroundColor: selected === index ? "white" : "#E4E9ED" },
    ];
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.chipRow}>
          {data.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={getChipStyle(index)}
                onPress={() => setSelected(index)}
              >
                <Text style={styles.text}>{item}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#E4E9ED",
    padding: 4,
    borderRadius: 400,
  },
  chip: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  paddingContainer: {
    padding: 24,
  },
});
