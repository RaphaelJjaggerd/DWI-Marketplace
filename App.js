import React from "react";
import { Text, View, Platform } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

//Components
import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log("Working");
  return (
   <View
    style={{
      flex:1,
      justifyContent: "center",
      alignItems: "center"
    }}
   >
     <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
     
   </View>
  );
}
