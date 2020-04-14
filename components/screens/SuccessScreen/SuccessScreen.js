import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


function SuccessScreen() {
    return (
        <View style={styles.mainView}>
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../../../images/strive_white_logo.png')}/>
            </View>
            <View style={styles.mainImageView}>
                <Image style={styles.image} source={require('./background_image.png')}/>
            </View>
            <View style={styles.textView}>
                <Text style={styles.mainText}>
                    Thanks for joining Strive!
                </Text>
                <Text style={styles.subText}>
                    We'll be in touch soon.
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F79353',
    },
    mainText: {
        fontSize: 30,
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
        flex: 3,
        justifyContent: 'center',
    },
    subText: {
        marginTop: 10,
        fontSize: 20,
        color: '#ffffff',
    },
    image: {
        height: 700,
        width: 400,
        resizeMode: 'contain',
    },
})

export default SuccessScreen;
