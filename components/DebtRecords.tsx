import {SectionList, View} from "react-native";
import ThemedText from "./ThemedText";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const DebtRecord = ({record}) => {
  const categoryIcons = ['🔴', '🟣', '🟠', '🟡', '🔵', '🟢']
  const randomIntegerBetweenZeroAndFive = Math.floor(Math.random() * 6)

  return (
    <View className="flex-row justify-between px-4">
      <View className="flex-row gap-x-4">
        <ThemedText tailwindClasses="text-3xl">{categoryIcons[randomIntegerBetweenZeroAndFive]}</ThemedText>
        <View>
          <ThemedText>{record.description}</ThemedText>
          <ThemedText tailwindClasses="text-sm">{record.category}</ThemedText>
        </View>
      </View>
      <View>
        <ThemedText tailwindClasses="text-xl">€ {record.amount}</ThemedText>
      </View>
    </View>
  )
}
export default function DebtRecords({data}) {
  return (
    <SafeAreaView edges={'top'}>
      <SectionList
        sections={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DebtRecord record={item}/>}
        renderItemHeader={({section: {title}}) => <ThemedText>{title}</ThemedText>}
      />
    </SafeAreaView>
  )
}