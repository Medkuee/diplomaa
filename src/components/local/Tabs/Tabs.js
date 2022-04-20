import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function Tabs({ children, text, style, onPress }) {
    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            {children}
            <Text style={[styles.text, style]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Tabs;
