import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomButton from "../../misc_components/CustomButton/CustomButton";

function InfoScreen({customText, nextScreen, backgroundImageName}) {
    const imageMapping = {
        'first' : require('./background_image_first.png'),
        'second' : require('./background_image_second.png'),
        'third' : require('./background_image_third.png'),
    };
    return (
        <View style={styles.mainView}>
            <View style={styles.logoView}>
                <Image
                    style={styles.logo}
                    source={require('../../../images/strive_orange_logo.png')}
                />
            </View>
            <Image style={styles.image} source={imageMapping[backgroundImageName]} />
            <View style={styles.textView}>
                <Text style={styles.text}>
                    {customText}
                </Text>
            </View>
            <View style={styles.buttonView}>
                <CustomButton titleText={'Next'} screenName={nextScreen} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 75,
        width: 200,
        resizeMode: 'contain',
        paddingTop: 30,
    },
    text: {
        color: '#5E5E5E',
        fontSize: 20,
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'flex-end',
        backgroundColor: '#ffffff',
    },
    image: {
        flex: 4,
        height: 400,
        width: 500,
        resizeMode: 'contain',
    },
    logoView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 350,
        marginTop: 20,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
});

export default InfoScreen;
