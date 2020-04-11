import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import {TextField} from "react-native-ui-lib";
import CustomButton from "../../misc_components/CustomButton/CustomButton";
import {
    updateFirstName,
    updateLastName,
    updateAge,
    updateDescription,
} from "../../../redux/actions";

function filterInput(inputString, regex){
    return regex.test(inputString);
}

const mapState = state => {
    return {
        state,
    }
};

const mapDispatch = dispatch => {
    return {
        updateFirstName: (text) => dispatch(updateFirstName(text)),
        updateLastName: (text) => dispatch(updateLastName(text)),
        updateAge: (text) => dispatch(updateAge(text)),
        updateDescription: (text) => dispatch(updateDescription(text)),
    }
};

function FirstProfileScreen({updateFirstName, updateLastName, updateAge, updateDescription}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [userDescription, setUserDescription] = useState("");

    const nameRegex = /^[A-Za-z ]+$/;
    const ageRegex = /^\d+$/;

    const handleFirstNameChange = (text) => {
        setFirstName(text);
        updateFirstName(text);
    };

    const handleLastNameChange = (text) => {
        setLastName(text);
        updateLastName(text);
    };

    const handleAgeChange = (text) => {
        setAge(text);
        updateAge(text);
    };

    const handleDescriptionChange = (text) => {
        setUserDescription(text);
        updateDescription(text);
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <View styles={styles.topViewImage}>
                    <Image style={styles.image} source={require('../../../images/strive_white_logo.png')}/>
                </View>
                <View styles={styles.topViewText}>
                    <Text style={styles.invitationText}>
                        Let's set up your profile
                    </Text>
                </View>
            </View>
            <KeyboardAvoidingView style={styles.mainContentView} behavior={'padding'}>
                <ScrollView style={styles.mainContentInputView} contentContainerStyle={{alignItems: 'center'}}>
                    <TextField style={styles.textField} title={'First name'} titleStyle={styles.textFieldTitle} value={firstName} onChangeText={text => handleFirstNameChange(text)} error={!filterInput(firstName, nameRegex)} />
                    <TextField style={styles.textField} title={'Last name'} titleStyle={styles.textFieldTitle} value={lastName} onChangeText={text => handleLastNameChange(text)} error={!filterInput(lastName, nameRegex)}/>
                    <TextField style={styles.textField} title={'Age'} value={age} titleStyle={styles.textFieldTitle} onChangeText={text => handleAgeChange(text)} error={!filterInput(age, ageRegex)}/>
                    <TextField style={styles.textField} title={'What best describes you?'} titleStyle={styles.textFieldTitle} placeholder={'e.g. High school student'} value={userDescription} onChangeText={text => handleDescriptionChange(text)}/>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.mainContentButtonView}>
                <CustomButton titleText={'Next'} screenName={'second_profile'} disabled={!filterInput(firstName, nameRegex) || !filterInput(lastName, nameRegex) || !filterInput(age, ageRegex) || userDescription === ''}/>
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
        width: "100%",
    },
    mainContentButtonView: {
        flex: 1,
        backgroundColor: '#F2F4F7',
        width: '100%',
        alignItems: 'center'
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
        paddingTop: 100,
    },
    mainContentView: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: '#F2F4F7',
        width: '100%',
        paddingTop: 25,
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
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

export default connect(mapState, mapDispatch)(FirstProfileScreen);
