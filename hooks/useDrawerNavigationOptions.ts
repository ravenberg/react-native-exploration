import {useColorScheme} from "nativewind";
import colors from "tailwindcss/colors";
import {theme} from "../util/theme";
import {DrawerNavigationOptions} from "@react-navigation/drawer";
import {Platform} from 'react-native';

export const useDrawerNavigationOptions = (): DrawerNavigationOptions => {
  const {colorScheme} = useColorScheme();

  return {
    drawerType: Platform.OS === 'ios' ? 'slide' : 'back',
    drawerLabelStyle: {
      color: theme[colorScheme ?? 'light'].textStyle
    },
    drawerStyle: {
      backgroundColor: theme[colorScheme ?? 'light'].backgroundStyle
    },
    headerStyle: {
      elevation: 0,
      backgroundColor: theme[colorScheme ?? 'light'].backgroundStyle
    },
    headerTintColor: theme[colorScheme ?? 'light'].textStyle,
    drawerActiveTintColor: colorScheme === 'dark' ? colors.stone[300] :colors.stone[600],
  }
}