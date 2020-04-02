import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TextField} from "react-native-ui-lib";
import CustomButton from "../../misc_components/CustomButton/CustomButton";

function filterInput(inputString, regex){
    return regex.test(inputString);
}

function FirstProfileScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [userDescription, setUserDescription] = useState("");

    console.log("firstName ", firstName);

    const nameRegex = /^[A-Za-z ]+$/;
    const ageRegex = /^\d+$/;

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
                    <TextField style={styles.textField} title={'First name'} titleStyle={styles.textFieldTitle} value={firstName} onChangeText={text => setFirstName(text)} error={!filterInput(firstName, nameRegex)} />
                    <TextField style={styles.textField} title={'Last name'} titleStyle={styles.textFieldTitle} value={lastName} onChangeText={text => setLastName(text)} error={!filterInput(lastName, nameRegex)}/>
                    <TextField style={styles.textField} title={'Age'} value={age} titleStyle={styles.textFieldTitle} onChangeText={text => setAge(text)} error={!filterInput(age, ageRegex)}/>
                    <TextField style={styles.textField} title={'What best describes you?'} titleStyle={styles.textFieldTitle} placeholder={'e.g. High school student'} value={userDescription} onChangeText={text => setUserDescription(text)}/>
                </View>
                <View style={styles.mainContentButtonView}>
                    <CustomButton titleText={'Next'} screenName={'second_profile'} disabled={!filterInput(firstName, nameRegex) || !filterInput(lastName, nameRegex) || !filterInput(age, ageRegex) || userDescription === ''}/>
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

export default FirstProfileScreen;
