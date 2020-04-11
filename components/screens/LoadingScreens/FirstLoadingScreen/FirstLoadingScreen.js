import React from 'react';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import {useNavigation} from "@react-navigation/native";

function FirstLoadingScreen(){

    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate("second_loading")
    }, 1000);

    return (
        <LoadingScreen logoColor={'orange'} backgroundColor={'white'}/>
    )
}

export default FirstLoadingScreen;
