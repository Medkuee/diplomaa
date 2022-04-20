import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

function Colour({ color, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor: color }]} />
        </TouchableOpacity>
    );
}

export default Colour;
