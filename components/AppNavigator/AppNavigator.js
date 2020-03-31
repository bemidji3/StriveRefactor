import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import FirstInfoScreen from "../screens/FirstInfoScreen/FirstInfoScreen";
import SecondInfoScreen from "../screens/SecondInfoScreen/SecondInfoScreen";
import ThirdInfoScreen from "../screens/ThirdInfoScreen/ThirdInfoScreen";
import GetStarted from "../screens/GetStarted/GetStarted";
import FirstProfileScreen from "../screens/FirstProfileScreen/FirstProfileScreen";



const Stack = createStackNavigator();

function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown: false}}>
                <Stack.Screen name={'landing'} component={LandingScreen} />
                <Stack.Screen name={'first_info'} component={FirstInfoScreen} />
                <Stack.Screen name={'second_info'} component={SecondInfoScreen} />
                <Stack.Screen name={'third_info'} component={ThirdInfoScreen} />
                <Stack.Screen name={'get_started'} component={GetStarted} />
                <Stack.Screen name={'first_profile'} component={FirstProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
