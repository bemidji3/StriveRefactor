import React from 'react';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import {useNavigation} from "@react-navigation/native";

function SecondLoadingScreen(){
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate("blank_screen")
    }, 2000);

    return(
        <LoadingScreen logoColor={'white'} backgroundColor={'orange'}/>
    )
}

export default SecondLoadingScreen;
