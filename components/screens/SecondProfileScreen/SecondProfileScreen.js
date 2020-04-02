import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TextField} from "react-native-ui-lib";
import SubmitButton from "../../misc_components/SubmitButton/SubmitButton";

function emailRegex(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function SecondProfileScreen() {
    console.log("rendering SecondProfileScreen ");

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [celebrity, setCelebrity] = useState("");

    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <View styles={styles.topViewImage}>
                    <Image style={styles.image} source={require('../../../images/strive_white_logo.png')}/>
                </View>
                <View styles={styles.topViewText}>
                    <Text style={styles.invitationText}>
                        {' '}
                        {' '}
                        Let's set up your profile
                    </Text>
                </View>
            </View>
            <View style={styles.mainContentView}>
                <View style={styles.mainContentInputView}>
                    <TextField style={styles.textField} title={'Email'} value={email} titleStyle={styles.textFieldTitle} onChangeText={text => setEmail(text)} error={emailRegex(email)}/>
                    <TextField style={styles.textField} title={'Phone number'} titleStyle={styles.textFieldTitle} value={phone} onChangeText={text => setPhone(text)}/>
                    <View>
                        <Text style={styles.customTopText}> Which celebrity would you like to </Text>
                    </View>
                    <TextField style={styles.textField} title={' see on strive?'} titleStyle={styles.textFieldTitle} value={celebrity} onChangeText={text => setCelebrity(text)}/>
                </View>
                <View style={styles.mainContentButtonView}>
                    <SubmitButton titleText={'Strive!'} disabled={email === '' || phone === '' || celebrity === ''}/>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    mainView: {
        flex: 6,
        alignItems: 'center',
        backgroundColor: '#F79353',
    },
    customTopText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#636364',
        marginLeft: -30,
        width: '85%',
    },
    customTopTextView: {
        alignItems: 'flex-start',
    },
    textField: {
        width: '85%',
    },
    mainContentInputView: {
        flex: 4,
        alignItems: 'center',
    },
    mainContentButtonView: {
        flex: 2,
    },
    topView: {
        flex: 2,
    },
    topViewImage: {
        flex: 5,
        justifyContent: 'flex-end',
    },
    topViewText: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 50,
        paddingTop: 100,
    },
    mainContentView: {
        flex: 4,
        alignItems: 'center',
        backgroundColor: '#F2F4F7',
        width: '100%',
        paddingTop: 25,
    },
    image: {
        height: 75,
        width: 200,
        resizeMode: 'contain',
        marginTop: 50,
    },
    invitationText: {
        fontSize: 20,
        color: '#ffffff',
    },
    textFieldTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#636364',
    },
});

export default SecondProfileScreen;
