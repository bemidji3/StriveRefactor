import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function CustomButton({screenName, titleText, disabled}) {
    console.log("screenName ", screenName);
    const navigation = useNavigation();
    const handleButtonPress = () => {
        navigation.navigate(screenName);
    };
    return (
        <TouchableOpacity
            disable={disabled}
            style={styles.button}
            mode={'contained'}
            onPress={handleButtonPress}>
            <Text style={styles.text}> {titleText} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3CD0F5',
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        color: '#ffffff',
        fontSize: 25,
    },
});

export default CustomButton;