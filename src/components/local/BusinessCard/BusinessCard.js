import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Modal, Image, Pressable } from 'react-native';
import styles from './styles';
import TrashSvg from '../../../assets/icons/TrashSvg';
import GradientButton from '../GradientButton';

function BusinessCard({ trashIcon, style, sendCard, image, handleAccept, handleDecline, id }) {
    const [fullScreenImageVisible, setFullScreenImageVisible] = useState(false);

    const handleSendPress = () => {
        sendCard(id);
    };

    return (
        <>
            <Pressable
                style={[styles.container, style]}
                onPress={() => {
                    console.log('imageimageimage', image);
                    if (image) setFullScreenImageVisible(true);
                }}
            >
                <ImageBackground source={{ uri: image }} style={[styles.imageBackGround]}>
                    <View style={[styles.iconView]}>
                        {trashIcon ? (
                            <>
                                <TouchableOpacity
                                    style={[styles.iconTouchable]}
                                    onPress={handleDecline}
                                >
                                    <TrashSvg />
                                </TouchableOpacity>
                                <GradientButton
                                    style={[styles.saveButton]}
                                    textStyle={[styles.appButtonStyle]}
                                    text="Хадгалах"
                                    onPress={handleAccept}
                                />
                            </>
                        ) : (
                            <GradientButton
                                style={[styles.sendButton]}
                                textStyle={[styles.appButtonStyle]}
                                onPress={handleSendPress}
                                text="Илгээх"
                            />
                        )}
                    </View>
                </ImageBackground>
            </Pressable>

            <Modal
                animationType="none"
                transparent={true}
                visible={fullScreenImageVisible}
                onRequestClose={() => setFullScreenImageVisible(false)}
            >
                <TouchableOpacity
                    onPress={() => {
                        setFullScreenImageVisible(false);
                        console.log('imageclosed');
                    }}
                    style={styles.fullScreenImageContainer}
                >
                    <Image
                        source={{ uri: image }}
                        style={styles.fullScreenImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Modal>
        </>
    );
}

export default BusinessCard;
