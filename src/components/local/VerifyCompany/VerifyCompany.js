import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';

import styles from './styles';

//components
import GradientButton from '../GradientButton';
import CustomTextInput from '../CustomTextInput';

//assets
import HomeSvg from '../../../assets/icons/HomeSvg';

//utils
import fontCalculator from '../../../utils/fontCalculator';

function VerifyCompany() {
    const [verifyModal, setVerifyModal] = useState(true);
    const [id, setId] = useState('');

    const handleModal = () => setVerifyModal(false);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={verifyModal}
            onRequestClose={() => {
                setVerifyModal(!verifyModal);
            }}
        >
            <View style={[styles.centeredView, styles.centeredView1]}>
                <View style={[styles.centeredViewBox]}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Нэрийн хуудас баталгаажуулах</Text>
                    </View>
                    <CustomTextInput
                        placeholder="Байгууллагын ID"
                        style={[styles.inputText]}
                        value={id}
                        onChangeText={setId}
                    >
                        <HomeSvg />
                    </CustomTextInput>
                    <GradientButton
                        textStyle={{ fontSize: fontCalculator(12) }}
                        style={[styles.appButtonStyle]}
                        onPress={handleModal}
                        text="Хадгалах"
                    />
                </View>
            </View>
        </Modal>
    );
}

export default VerifyCompany;
