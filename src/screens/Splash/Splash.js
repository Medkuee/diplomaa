import React from 'react';
import { Image, View, Dimensions } from 'react-native';

import styles from './styles';

const Splash = () => {
    return (
        <View style={{ width: Dimensions.width, height: Dimensions.height }}>
            <Image style={[styles.image]} source={require('../Loader')} />
        </View>
    );
};

export default Splash;
