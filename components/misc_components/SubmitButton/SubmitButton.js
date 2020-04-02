import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';



function SubmitButton({titleText, disabled}){

    const handleButtonPress = () => {
        console.log('button pressed!')
    };

    return <TouchableOpacity
        disabled={disabled}
        style={disabled ? styles.buttonDisabled : styles.buttonActive}
        mode={'contained'}
        onPress={handleButtonPress}
    >
        <Text style={styles.text}> {titleText} </Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    buttonActive: {
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
    buttonDisabled: {
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#A4A3A5',
    },
});

export default SubmitButton;
