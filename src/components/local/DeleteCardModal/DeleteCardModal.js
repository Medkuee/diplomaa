import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import styles from './styles';

//components
import GradientButton from '../GradientButton';

function DeleteCardModal({ deleteCardModalVisible, onClickClose, handleDelete }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={deleteCardModalVisible}
            onRequestClose={onClickClose}
        >
            <Pressable style={[styles.modalView]} onPress={onClickClose}>
                <View style={[styles.modalBox]}>
                    <Text style={[styles.modalText]}>Баталгаажуулах</Text>
                    <Text style={[styles.alertText]}>Та уг нэрийн хуудсыг устгах гэж байна.</Text>
                    <View style={[styles.buttonView]}>
                        <GradientButton
                            style={[styles.appButtonStyle]}
                            background={{ backgroundColor: '#F2F3F2' }}
                            onPress={onClickClose}
                        >
                            <Text style={[styles.cancelText]}>Үгүй</Text>
                        </GradientButton>
                        <GradientButton style={[styles.appButton]} onPress={handleDelete}>
                            <Text style={[styles.allowText]}>Тийм</Text>
                        </GradientButton>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
}

export default DeleteCardModal;
