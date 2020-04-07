import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomButton from "../../misc_components/CustomButton/CustomButton";

function GetStarted() {
    return (
        <View style={styles.mainView}>
            <View style={styles.logoView}>
                <Image
                    style={styles.logo}
                    source={require('../../../images/strive_white_logo.png')}
                />
            </View>
                <Image
                    style={styles.image}
                    source={require('./background_image.png')}
                />
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
        marginTop: 60,
        height: 250,
        width: 250,
        resizeMode: 'contain',
    },
    logoView: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 4,
        width: 400,
        height: 700,
        resizeMode: 'contain',
    },
    imageView: {
        flex: 4,
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
