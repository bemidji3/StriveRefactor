import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import FirstInfoScreen from "../screens/FirstInfoScreen/FirstInfoScreen";
import SecondInfoScreen from "../screens/SecondInfoScreen/SecondInfoScreen";
import ThirdInfoScreen from "../screens/ThirdInfoScreen/ThirdInfoScreen";
import FourthInfoScreen from "../screens/FourthInfoScreen/FourthInfoScreen";
import GetStarted from "../screens/GetStarted/GetStarted";
import FirstProfileScreen from "../screens/FirstProfileScreen/FirstProfileScreen";
import SecondProfileScreen from "../screens/SecondProfileScreen/SecondProfileScreen";
import FirstLoadingScreen from "../screens/LoadingScreens/FirstLoadingScreen/FirstLoadingScreen";
import SecondLoadingScreen from "../screens/LoadingScreens/SecondLoadingScreen/SecondLoadingScreen";
import BlankScreen from "../screens/LoadingScreens/BlankScreen/BlankScreen";

const Stack = createStackNavigator();

function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown: false}}>
                <Stack.Screen name={'first_loading'} component={FirstLoadingScreen} />
                <Stack.Screen name={'second_loading'} component={SecondLoadingScreen} />
                <Stack.Screen name={'blank_screen'} component={BlankScreen} />
                <Stack.Screen name={'landing'} component={LandingScreen} />
                <Stack.Screen name={'first_info'} component={FirstInfoScreen} />
                <Stack.Screen name={'second_info'} component={SecondInfoScreen} />
                <Stack.Screen name={'third_info'} component={ThirdInfoScreen} />
                <Stack.Screen name={'fourth_info'} component={FourthInfoScreen}/>
                <Stack.Screen name={'get_started'} component={GetStarted} />
                <Stack.Screen name={'first_profile'} component={FirstProfileScreen}/>
                <Stack.Screen name={'second_profile'} component={SecondProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
