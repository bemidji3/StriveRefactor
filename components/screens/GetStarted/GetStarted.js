import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomButton from "../../misc_components/CustomButton/CustomButton";

function GetStarted() {
    return (
        <View style={styles.mainView}>
            <Image
                style={styles.logo}
                source={require('../../../images/strive_white_logo.png')}
            />
            <View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('./background_image.png')}
                />
            </View>
            <View style={styles.buttonView}>
                <CustomButton titleText={'Get Started'} screenName={'first_profile'} />
                <Text style={styles.disclaimerText}>
                    By clicking "Get Started" you agree to our Terms and Privacy Policy.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#F79353',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        flex: 1,
        height: 75,
        width: 200,
        resizeMode: 'contain',
    },
    image: {
        height: 500,
        width: 500,
        resizeMode: 'contain',
    },
    imageView: {
        flex: 3,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    disclaimerText: {
        fontSize: 15,
        width: 300,
        paddingTop: 10,
        textAlign: 'center',
    },
});

export default GetStarted;
