import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

function ProfileImage({ image, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            {!image ? (
                <View style={[styles.profileImage, styles.defaultImage]} />
            ) : (
                <Image source={{ uri: image }} style={[styles.profileImage]} />
            )}
        </TouchableOpacity>
    );
}

export default ProfileImage;
