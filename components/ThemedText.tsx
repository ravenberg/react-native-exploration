import { Text } from "react-native";
import classNames, {Argument} from "classnames";
import {useColorScheme} from "nativewind";
import {theme} from "../util/theme";
import React from "react";

interface ThemedTextProps {
  children?: React.ReactNode;
  stylesheetStyles?: any
  tailwindClasses?: classNames.Argument
}

export default function ({ children, stylesheetStyles, tailwindClasses }: ThemedTextProps) {
  const classes = classNames(
    'text-stone-800',
    'dark:text-stone-50',
    tailwindClasses
  )

  return (
    <Text style={stylesheetStyles} className={classes}>
      {children}
    </Text>
  )
}