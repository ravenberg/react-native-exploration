import {View} from "react-native";
import classNames from "classnames";
import {theme} from "../util/theme";
import React from "react";

interface ThemedViewProps {
  children?: React.ReactNode;
  stylesheetStyles?: any
  tailwindClasses?: string[]
}

export default function ({children, stylesheetStyles, tailwindClasses}: ThemedViewProps) {
  const classes = classNames(
    'bg-stone-50',
    'dark:bg-stone-800',
    tailwindClasses
  )

  return (
    <View style={stylesheetStyles} className={classes}>
      {children}
    </View>
  )
}