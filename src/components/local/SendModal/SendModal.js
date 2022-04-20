import React, { useState } from 'react';
import { TextInput, Text, Pressable, Modal, View } from 'react-native';

import styles from './styles';

// provider
import KeyboardDismiss from '../../../providers/KeyboardDismiss';

//assets
import PhoneSvg from '../../../assets/icons/PhoneSvg';
import SendSvg from '../../../assets/icons/SendSvg';

//components
import GradientButton from '../GradientButton';

function SendModal({ modalVisible, hideModal, handleSend }) {
    const [input, setInput] = useState('');

    const handleSendPress = () => {
        // validate phone
        handleSend(input);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={hideModal}
        >
            <KeyboardDismiss>
                <View style={styles.dismissView}>
                    <Pressable style={styles.centeredView} onPress={hideModal}>
                        <Pressable style={styles.modalView}>
                            <Text style={styles.modalText}>
                                Нэрийн хуудас хүлээн авах хэрэглэгчийн дугаарыг оруулна уу
                            </Text>
                        </Pressable>
                        <Pressable style={[styles.container]}>
                            <PhoneSvg />
                            <Text style={[styles.containerText]}>+976</Text>
                            <TextInput
                                style={[styles.textInput]}
                                keyboardType="number-pad"
                                value={input}
                                onChangeText={setInput}
                                maxLength={8}
                            />
                            <GradientButton style={[styles.sendButton]} onPress={handleSendPress}>
                                <SendSvg color="#ffffff" />
                            </GradientButton>
                        </Pressable>
                    </Pressable>
                </View>
            </KeyboardDismiss>
        </Modal>
    );
}

export default SendModal;
