import React from "react";

import { Button, SafeAreaView, Text } from "react-native";

const PlanGoalsScreen = () => {
  return (
    <SafeAreaView>
      <Button title="Plan Tomorrow's Goals" />
      <Button title="Plan Next Week's Goals" />
      <Button title="Plan Next Month's Goals" />
      <Button title="Plan Next Year's Goals" />
      <Button title="Edit Goals" />
    </SafeAreaView>
  )
}

export default PlanGoalsScreen;