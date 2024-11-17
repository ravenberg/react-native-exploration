import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './screens/home';
import {Categories} from "./screens/categories";
import {Settings} from "./screens/settings";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {useDrawerNavigationOptions} from "./hooks/useDrawerNavigationOptions";

import 'react-native-gesture-handler';
import './global.css';
import {SafeAreaProvider} from "react-native-safe-area-context";

const Drawer = createDrawerNavigator()

function App() {
  const screenOptions = useDrawerNavigationOptions()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{...screenOptions}}>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Categories" component={Categories}/>
          <Drawer.Screen name="Settings" component={Settings}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;