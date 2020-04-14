import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomButton from "../../misc_components/CustomButton/CustomButton";


function ErrorScreen(){
    return (
        <View style={styles.mainView}>
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../../../images/strive_white_logo.png')}/>
            </View>
            <View style={styles.mainImageView}>
                <Image style={styles.mainImage} source={require('./error_icon.png')} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>
                    Oh no!  Something went wrong.  Please try again later.  Thanks for choosing Strive!
                </Text>
            </View>
            <View style={styles.buttonView}>
                <CustomButton titleText={'Try Again'} screenName={'get_started'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f56642',
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
        width: '90%',
    },
    textView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    logoView: {
        flex: 1,
    },
    logo: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
    },
    mainImageView: {
        justifyContent: 'center',
        flex: 2,
    },
    mainImage: {
        width: 400,
        height: 700,
        resizeMode: 'contain',
    },
    buttonView: {
        flex: 1,
    },
    goBackButton: {

    }
});

export default ErrorScreen;
