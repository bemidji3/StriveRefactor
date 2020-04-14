import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function CustomButton({screenName, titleText, disabled, disableBack}) {
    console.log("screenName ", screenName);
    const navigation = useNavigation();
    const handleButtonPress = () => {
        if(disableBack){
            navigation.setOptions({
                headerLeft: null
            })
        }
        navigation.navigate(screenName);
    };
    return (
        <TouchableOpacity
            disabled={disabled}
            style={disabled ? styles.buttonDisabled : styles.buttonActive}
            mode={'contained'}
            onPress={handleButtonPress}>
            <Text style={styles.text}> {titleText} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonActive: {
        backgroundColor: '#3CD0F5',
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    buttonDisabled: {
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#A4A3A5',
    },
    text: {
        color: '#ffffff',
        fontSize: 25,
    },
});

export default CustomButton;