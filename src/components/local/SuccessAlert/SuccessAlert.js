import React, { useEffect } from 'react';
import { View, Text, Modal } from 'react-native';

import styles from './styles';
import Icon from '../../../assets/icons/SuccessSvg';

function Success({ visible, hideModal }) {
    useEffect(() => {
        let timer = null;
        if (visible) {
            timer = setTimeout(() => {
                hideModal();
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            clearTimeout(timer);
        }
    }, [visible]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                hideModal();
            }}
        >
            <View style={[styles.centeredView, styles.centeredView1]}>
                <View style={[styles.successView]}>
                    <Icon />
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Таны нэрийн хуудас амжилттай илгээгдлээ!
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default Success;
