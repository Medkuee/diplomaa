import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ArrowSvg from '../../../assets/icons/ArrowSvg';
import ProfileImage from '../ProfileImage';

import styles from './styles';

function Header({ avatar, buttonGoBack, goProfile, headerScreenName, imageAvailable }) {
    return (
        <View style={styles.topView}>
            <View style={[styles.backArrowView]}>
                {headerScreenName !== 'Жагсаалт' && headerScreenName !== 'Хайлт' && (
                    <TouchableOpacity onPress={buttonGoBack} style={[styles.touchableArrow]}>
                        <ArrowSvg />
                    </TouchableOpacity>
                )}

                <Text style={[styles.listText]}>{headerScreenName}</Text>

                {imageAvailable && <ProfileImage image={avatar} onPress={goProfile} />}
            </View>
        </View>
    );
}

export default Header;
