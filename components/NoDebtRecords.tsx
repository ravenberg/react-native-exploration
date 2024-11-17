import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";
import Button from "./Button";
import HandGrip from "./svg/HandGrip.";
import {useColorScheme} from "nativewind";
import colors from "tailwindcss/colors";

export default function NoDebtRecords() {
  const {colorScheme} = useColorScheme();
  return (
    <ThemedView>
      <HandGrip fill={colorScheme === 'dark' ? colors.stone[300] : colors.stone[800] }/>
      <ThemedText tailwindClasses={['text-center', 'text-lg', 'mb-10']}>Great you're here. Together we will work torwards making you debt free.</ThemedText>
      <Button>Fill in your debt</Button>
    </ThemedView>
  )
}