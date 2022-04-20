import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

function GradientButton({ children, style, textStyle, onPress, text = '' }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#FF8F5F', '#FF4242']}
                style={[styles.linear]}
            >
                <Text style={[styles.text, textStyle]}>{text}</Text>
                <View>{children}</View>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default GradientButton;
