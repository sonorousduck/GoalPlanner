import React from "react";

import { SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DailyGoalScreen from "./App/screens/DailyGoalScreen";
import WeeklyGoalScreen from "./App/screens/WeeklyGoalScreen";
import MonthlyGoalScreen from "./App/screens/MonthlyGoalScreen";
import YearlyGoalScreen from "./App/screens/YearlyGoalScreen";

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Daily" component={DailyGoalScreen} />
        <Drawer.Screen name="Weekly" component={WeeklyGoalScreen} />
        <Drawer.Screen name="Monthly" component={MonthlyGoalScreen} />
        <Drawer.Screen name="Yearly" component={YearlyGoalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;