import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function BlankScreen(){

    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate("landing")
    }, 500);

    return (
        <View style={styles.mainView}/>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 6,
        backgroundColor: '#F79353'
    }
});


export default BlankScreen;
