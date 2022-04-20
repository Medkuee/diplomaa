import React, { useEffect, useContext, useState, version } from 'react';
import { BackHandler } from 'react-native';
import { GlobalContext } from '../providers/store';
import Loader from '../components/global/Loader';
import Alert from '../components/global/Alert';
import { CANCEL_ALERT } from '../actions/system';

export default () => {
    const { state, dispatch } = useContext(GlobalContext);
    const { alert, isLoading } = state;

    useEffect(() => {
        if (isLoading || alert.isAlert)
            BackHandler.addEventListener('hardwareBackPress', backFunction);
        else if (!isLoading && !alert.isAlert)
            BackHandler.removeEventListener('hardwareBackPress', backFunction);
    }, [state.sytem]);

    const backFunction = () => true;

    return (
        <>
            <Loader isLoading={isLoading} />
            <Alert
                close={() => {
                    dispatch({ type: CANCEL_ALERT });
                    alert.onClose && alert.onClose();
                }}
                visible={alert.isAlert}
                text={alert.message}
                type={alert.alertType}
                buttonText={alert.buttonText}
                textWidth={alert.textWidth}
            />
        </>
    );
};
