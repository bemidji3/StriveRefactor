import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomButton from "../../misc_components/CustomButton/CustomButton";

function LandingScreen() {
    return (
        <View style={styles.mainView}>
            <Image
                style={styles.logo}
                source={require('../../../images/strive_white_logo.png')}
            />
            <Image style={styles.image} source={require('./background_image.png')} />
            <View style={styles.textView}>
                <Text style={styles.text}>
                    The only debit card that donates 10% of its profits to charitable causes
                    and prioritizes the financial health of its users.
                </Text>
            </View>
            <View style={styles.buttonView}>
                <CustomButton
                    style={styles.button}
                    screenName={'first_info'}
                    titleText={'Learn More'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 2,
        backgroundColor: '#F79353',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        flex: 4,
        width: 400,
        height: 700,
    },
    button: {
        flex: 1,
        backgroundColor: '#50C8EC',
        height: 75,
        alignSelf: 'flex-start',
    },
    logo: {
        flex: 1,
        height: 50,
        width: 150,
        resizeMode: 'contain',
        marginTop: 20,
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    textView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '85%',
        marginTop: 20,
    },
});

export default LandingScreen;