import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllDonors from "./component/AllDonors/AllDonors";
import BloodGroup from "./component/BloodGroup/BloodGroup";
import DoctorsList from "./component/DoctorsList/DoctorsList";
import DonnerDetails from "./component/DonnerDetails/DonnerDetails";
import Home from "./component/Home/Home";
import JoinOurCommunity from "./component/JoinOurCommunity/JoinOurCommunity";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import SearchBlood from "./component/SearchBlood/SearchBlood";
import Hospital from "./component/Hospital/Hospital";
import Verification from "./component/Verification/Verification";
import ThalassemiaProfile from "./component/ThalassemiaProfile/ThalassemiaProfile";
import BloodBuddyId from "./component/BloodBuddyId/BloodBuddyId";
import DropdownBoard from "./component/DropdownBoard/DropdownBoard";
import Vaccination from "./component/Vaccination/Vaccination";
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
        <Stack.Screen name="DonnerDetails" component={DonnerDetails} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="ThalassemiaProfile"
          component={ThalassemiaProfile}
        />
        <Stack.Screen name="verify" component={Verification} />
        <Stack.Screen name="BloodGroup" component={BloodGroup} />
        <Stack.Screen name="JoinOurCommunity" component={JoinOurCommunity} />
        <Stack.Screen name="SearchBlood" component={SearchBlood} />
        <Stack.Screen name="DropdownBoard" component={DropdownBoard} />
        <Stack.Screen name="BloodBuddyId" component={BloodBuddyId} />
        <Stack.Screen name="AllDonors" component={AllDonors} />
        <Stack.Screen name="Vaccination" component={Vaccination} />
        <Stack.Screen name="Hospital" component={Hospital} />
        <Stack.Screen name="DoctorsList" component={DoctorsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
