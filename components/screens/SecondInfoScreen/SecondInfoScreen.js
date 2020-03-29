import React from 'react';
import InfoScreen from "../InfoScreen/InfoScreen";

function SecondInfoScreen() {
    return(
        <InfoScreen customText={'Keep track of your spending and other important metrics.'} backgroundImageName={'second'} nextScreen={'third_info'}/>
    );
}

export default SecondInfoScreen;