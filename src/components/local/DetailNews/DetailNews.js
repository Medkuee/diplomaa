import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

function DetailNews({ onPress, title, image }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.newsView]}>
                <ImageBackground source={{ uri: image }} style={[styles.imageBackground]}>
                    <View style={[styles.newsText]}>
                        <Text style={styles.newsTitle}>{title}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

export default DetailNews;
