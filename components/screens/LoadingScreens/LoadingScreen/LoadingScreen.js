import React from 'react';
import {StyleSheet, Image, View} from "react-native";

function LoadingScreen({logoColor, backgroundColor}){
    const backgroundColorMapping = {
        'orange' : '#F79353',
        'white' : '#F2F4F7',
    };
    const logoPicker = {
        'orange' : require('../../../../images/strive_orange_logo.png'),
        'white' : require('../../../../images/strive_white_logo.png'),
    };

    return(
        <View style={dynamicStyle(backgroundColorMapping[backgroundColor])}>
            <View style={styles.imageView}>
                <Image style={styles.logo} source={logoPicker[logoColor]} />
            </View>
        </View>
    )

}

const dynamicStyle = function(color) {
    return {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color
    }
};

const styles = StyleSheet.create({
    imageView: {
        flex: 2,
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
    }
});

export default LoadingScreen;
