import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {makeRequest} from "../../../redux/actions";

const mapState = state => {
    return {
        state: state,
    }
};

const mapDispatch = dispatch => {
    return {
        makeRequest: (payload) => dispatch(makeRequest(payload)),
    }
};

function SubmitButton({titleText, disabled, makeRequest, state}){

    const handleRequest = () => {
        const requestPayload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...state, timestamp: Date.now()})
        };
        makeRequest(requestPayload);
        console.log("making request");
    };

    return <TouchableOpacity
        disabled={disabled}
        style={disabled ? styles.buttonDisabled : styles.buttonActive}
        mode={'contained'}
        onPress={handleRequest}
    >
        <Text style={styles.text}> {titleText} </Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    buttonActive: {
        backgroundColor: '#3CD0F5',
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        color: '#ffffff',
        fontSize: 25,
    },
    buttonDisabled: {
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#A4A3A5',
    },
});

export default connect(mapState, mapDispatch)(SubmitButton);
