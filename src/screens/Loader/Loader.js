import React from 'react';
import { View } from 'react-native';

//assets
import BackSvg from '../../assets/icons/BackSvg';

//styles
import styles from './styles';

function Loader() {
    return (
        <View style={[styles.container]}>
            <View>
                <BackSvg color={'#FFFFFF'} />
            </View>
        </View>
    );
}

export default Loader;
