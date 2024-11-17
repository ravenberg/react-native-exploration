import {Pressable, Text} from "react-native";
import React from "react";
import colors from "tailwindcss/colors";
import {useColorScheme} from "nativewind";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export default function Button({children, onPress}: ButtonProps) {
  const {colorScheme} = useColorScheme();
  const rippleColor = colorScheme === 'dark' ? colors.emerald[400] : colors.emerald[700];

  return (
    <Pressable
      android_ripple={{color: rippleColor}}
      className="w-full px-6 py-2 rounded-md bg-emerald-600 dark:bg-emerald-500" onPress={onPress}
    >
      <Text className="text-stone-50 text-center text-xl">
        {children}
      </Text>
    </Pressable>
  )
}