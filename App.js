import React from "react";

import { SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DailyGoalScreen from "./App/screens/DailyGoalScreen";
import WeeklyGoalScreen from "./App/screens/WeeklyGoalScreen";
import MonthlyGoalScreen from "./App/screens/MonthlyGoalScreen";
import YearlyGoalScreen from "./App/screens/YearlyGoalScreen";
import PlanGoalsScreen from "./App/screens/PlanGoalsScreen";
import SettingsScreen from "./App/screens/Settings";
import { Dimensions } from "react-native";
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          //backgroundColor: '#c6cbef',
          width: Dimensions.get("window").width / 1.75,
        }
      }}>
        <Drawer.Screen name="Today" component={DailyGoalScreen} />
        <Drawer.Screen name="This Week" component={WeeklyGoalScreen} />
        <Drawer.Screen name="This Month" component={MonthlyGoalScreen} />
        <Drawer.Screen name="This Year" component={YearlyGoalScreen} />
        <Drawer.Screen name="Plan Goals" component={PlanGoalsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;