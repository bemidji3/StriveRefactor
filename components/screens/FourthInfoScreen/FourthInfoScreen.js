import React from 'react';
import InfoScreen from "../InfoScreen/InfoScreen";


function FourthInfoScreen(){
    return(
        <InfoScreen customText={'Pick the charities you wish to support and we will donate to them every time you use your Strive debit card'} backgroundImageName={'fourth'} nextScreen={'get_started'}/>
    )
}

export default FourthInfoScreen;
