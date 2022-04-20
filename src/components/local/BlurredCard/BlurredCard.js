import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

import GradientButton from '../GradientButton';

function BlurredCard({ onPress, image }) {
    return (
        <View style={[styles.imageView]}>
            <ImageBackground
                source={{ uri: image }}
                style={[styles.imageBackGround]}
                blurRadius={8}
            >
                <GradientButton
                    style={[styles.appButtonStyle]}
                    onPress={onPress}
                    textStyle={[styles.appButtonStyleText]}
                    text="Харах хүсэлт илгээх"
                />
            </ImageBackground>
        </View>
    );
}

export default BlurredCard;
