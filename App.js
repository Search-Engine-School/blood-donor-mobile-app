import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BloodGroup from "./component/BloodGroup/BloodGroup";
import Home from "./component/Home/Home";
import JoinOurCommunity from "./component/JoinOurCommunity/JoinOurCommunity";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Verification from "./component/Verification/Verification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="verify" component={Verification} />
        <Stack.Screen name="BloodGroup" component={BloodGroup} />
        <Stack.Screen name="JoinOurCommunity" component={JoinOurCommunity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
