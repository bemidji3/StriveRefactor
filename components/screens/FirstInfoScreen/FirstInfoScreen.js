import React from 'react';
import InfoScreen from "../InfoScreen/InfoScreen";


function FirstInfoScreen(){
    return(
        <InfoScreen customText={'Learn personal finance from your favorite celebrities.'} nextScreen={'second_info'} backgroundImageName={'first'}/>
    );
}

export default FirstInfoScreen;
