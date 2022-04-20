import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

function News({ content, title, createdAt, image }) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.textStyle]}>{title}</Text>
            <Text style={[styles.companyText]}>Byte Links ХХК {createdAt}</Text>
            <View style={[styles.imageContainer]}>
                <Image source={{ uri: image }} style={[styles.imageView]} />
            </View>
            <Text style={[styles.contentText]}>{content}</Text>
        </View>
    );
}

export default News;
