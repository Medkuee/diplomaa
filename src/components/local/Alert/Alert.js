import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './style.js';
import DialogBox from '../../../components/ui/DialogBox';

const Alert = (props) => {
    var logo = require('../../../assets/images/global/warning.png');
    var color = '#C64459';

    if (props.type === 2) {
        logo = require('../../../assets/images/global/bell.png');
        color = '#ED7A50';
    } else if (props.type === 3) {
        logo = require('../../../assets/images/global/confirm.png');
        color = '#00C9AA';
    }

    return (
        <>
            <DialogBox visible={props.visible} width={250} height={props.alertHeight || 160}>
                <>
                    <Image source={logo} style={{ ...styles.icon }} />
                    <Text style={{ ...styles.text, color: color, maxWidth: props.textWidth }}>
                        {props.text}
                    </Text>
                    <TouchableOpacity
                        style={{ ...styles.button, backgroundColor: color }}
                        onPress={props.close}
                    >
                        <Text style={styles.buttonText}>{props.buttonText}</Text>
                    </TouchableOpacity>
                </>
            </DialogBox>
        </>
    );
};

Alert.defaultProps = {
    type: 1,
    buttonText: 'Дахин оролдох',
    textWidth: 200,
};

export default Alert;
