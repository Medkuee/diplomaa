import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import GradientButton from '../GradientButton';

import styles from './styles';

function SwipeableList({ image, name, lastName, decline, accept }) {
    const declineBox = () => {
        return (
            <TouchableOpacity onPress={decline}>
                <View style={[styles.swipeableView]}>
                    <Text style={[styles.swipeableText]}>Татгалзах</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <Swipeable renderRightActions={declineBox}>
            <View style={[styles.listContainer]}>
                <Image source={{ uri: image }} style={[styles.image]} />
                <View style={[styles.listContainerView]}>
                    <Text style={[styles.name]}>{`${lastName}.${name}`}</Text>
                    <Text style={styles.date}>13:34 Өнөөдөр</Text>
                </View>
                <GradientButton
                    style={[styles.allowanceButton]}
                    textStyle={[styles.gradientButtonStyle]}
                    text="Зөвшөөрөх"
                    onPress={accept}
                />
            </View>
        </Swipeable>
    );
}

export default SwipeableList;
