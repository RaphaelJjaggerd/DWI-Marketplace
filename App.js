import React from "react";
import { Text, View, Platform } from "react-native";
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
     <Text style={{
       fontFamily:  Platform.OS === "android" ? "Roboto" : "Lato",
       fontSize: 30,
       fontWeight: "600",
       color: "tomato",
       textTransform: "capitalize",
       textDecorationLine:  "underline line-through",
       textAlign: "center",
       lineHeight: 30,

     }}>
       i love flutter but react native aint too shabby.   
     </Text>
     
   </View>
  );
}
