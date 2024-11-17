import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

export function Categories() {
  return <ThemedView stylesheetStyles={styles.container}>
    <ThemedText>Categories screen</ThemedText>
    <StatusBar style="auto"/>
  </ThemedView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
