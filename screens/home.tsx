import {ScrollView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import NoDebtRecords from "../components/NoDebtRecords";
import DebtRecords from "../components/DebtRecords";

export function Home() {
  const debtRecords = [];
  const pendingRecords = [];
  const settledRecords = [];
  const planRecords = [];

  // seed the debtRecords array with some dummy data
  for (let i = 0; i < 8; i++) {
    const record = {
      id: i,
      amount: 1000,
      category: 'Dummy category',
      description: 'Dummy debt record',
    }
    pendingRecords.push(record);
    settledRecords.push(record);
    planRecords.push(record);
  }

  // debtRecords.push({title: 'Pending', data: pendingRecords}, {title: 'Settled', data: settledRecords}, {
  //   title: 'Plan',
  //   data: planRecords
  // });

  return (
    <ThemedView stylesheetStyles={styles.container}>
      <ThemedView tailwindClasses={['px-12 py-4 flex-row justify-between']}>
        <ThemedView>
          <ThemedText tailwindClasses={['text-sm opacity-60']}>Debt</ThemedText>
          <ThemedText tailwindClasses={['text-4xl']}>€4995</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText tailwindClasses={['text-sm opacity-60']}>Debt paid</ThemedText>
          <ThemedText tailwindClasses={['text-4xl']}>€1236</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView tailwindClasses={['px-12 py-4 flex-row justify-center']}>
        <ThemedView>
          <ThemedText tailwindClasses={['text-sm opacity-60']}>Days left</ThemedText>
          <ThemedText tailwindClasses={['text-4xl']}>123 days</ThemedText>
        </ThemedView>
      </ThemedView>
      {!debtRecords.length ? (
        <ThemedView tailwindClasses={['px-12 flex-row justify-center']}>
          <NoDebtRecords/>
        </ThemedView>
      ) : (
        <ThemedView>
          <DebtRecords data={debtRecords}/>
        </ThemedView>
      )}
      <StatusBar style="auto"/>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
