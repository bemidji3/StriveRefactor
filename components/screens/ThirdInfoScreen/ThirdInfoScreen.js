import React from 'react';
import InfoScreen from "../InfoScreen/InfoScreen";


function ThirdInfoScreen(){
    return(
        <InfoScreen nextScreen={'get_started'} backgroundImageName={'third'} customText={'Earn rewards and discounts at your favorite companies while developing good saving habits.'}/>
    );
}

export default ThirdInfoScreen;
