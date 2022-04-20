import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    Linking,
    Platform,
    Pressable,
    Modal,
    Image,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import fontCalculator from '../../../utils/fontCalculator';

//assets
import CircleSvg from '../../../assets/icons/CircleSvg';
import MailSvg from '../../../assets/icons/MailSvg';
import PhoneSvg from '../../../assets/icons/PhoneSvg';
import DotsSvg from '../../../assets/icons/DotsSvg';
import VerifiedSvg from '../../../assets/icons/VerifiedSvg';
import FilesSvg from '../../../assets/icons/FilesSvg';
import TrashSvg from '../../../assets/icons/TrashSvg';
import DeleteCardModal from '../DeleteCardModal';

function Card({
    color,
    companyName,
    groupName,
    name,
    verified,
    phone,
    image,
    groupPress,
    editPress,
    handleDeleteCards,
    data,
    index,
}) {
    const [deleteCardModal, setDeleteCardModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [moreButtonHeight, setMoreButtonHeight] = useState({});
    const [fullScreenImageVisible, setFullScreenImageVisible] = useState(false);
    const [cardEdit, setCardEdit] = useState(true);
    const moreButtonRef = useRef();

    useEffect(() => {
        if (cardEdit === false) {
            setShowDeleteModal(false);
            setCardEdit(true);
        }
    }, [cardEdit]);

    const openDeleteCardModal = () => {
        setCardEdit(false);
        setDeleteCardModal(true);
    };

    const handleDeletePress = () => {
        handleDeleteCards(data.id);
    };

    const handleGroupPress = () => {
        setCardEdit(false);
        groupPress(data.card_id);
    };

    const handleEditPress = () => {
        setCardEdit(false);
        editPress(index);
    };

    const closeDeleteModal = () => {
        setDeleteCardModal(false);
    };

    const openDial = () => {
        if (Platform.OS === 'android') {
            Linking.openURL(`tel:${phone}`);
        } else {
            Linking.openURL(`tel:${phone}`);
        }
    };
    const openMessage = () => {
        if (Platform.OS === 'android') {
            Linking.openURL(`sms:${phone}`);
        } else {
            Linking.openURL(`sms:${phone}`);
        }
    };
    const openCardEdit = (event) => {
        moreButtonRef.current.measure((fx, fy, width, height, px, py) => {
            console.log('X offset to page: ' + px);
            console.log('Y offset to page: ' + py);
            setMoreButtonHeight({ top: py, opacity: 1 });
            // setMoreButtonWidth(px - 190);
        });

        setShowDeleteModal(true);
    };
    const hideFullScreenImageModal = () => {
        setFullScreenImageVisible(false);
    };
    const showFullScreenImageModal = () => {
        if (image) {
            setFullScreenImageVisible(true);
        }
    };
    const hideEditModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <>
            <Pressable style={[styles.imageView]} onPress={showFullScreenImageModal}>
                <ImageBackground source={{ uri: image }} style={styles.imageBackGround}>
                    {color !== '' && (
                        <View style={[styles.iconView]}>
                            <CircleSvg color={color} />
                            <Text style={[styles.imageBackGroundText]}>{groupName}</Text>
                        </View>
                    )}
                    {verified && (
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#FF8F5F', '#FF4242']}
                            style={[styles.verifiedView]}
                        >
                            <VerifiedSvg />
                        </LinearGradient>
                    )}
                </ImageBackground>
            </Pressable>

            <View style={styles.container}>
                <View>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.companyNameText}>{companyName}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={openMessage} style={styles.touchableOpacityMailIcon}>
                        <MailSvg width="24" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openDial}>
                        <PhoneSvg width="24" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openCardEdit} ref={moreButtonRef}>
                        <DotsSvg width="24" />
                    </TouchableOpacity>
                </View>
            </View>

            <DeleteCardModal
                deleteCardModalVisible={deleteCardModal}
                onClickClose={closeDeleteModal}
                handleDelete={handleDeletePress}
            />

            <Modal
                animationType="none"
                transparent={true}
                visible={fullScreenImageVisible}
                onRequestClose={hideFullScreenImageModal}
            >
                <TouchableOpacity
                    onPress={hideFullScreenImageModal}
                    style={styles.fullScreenImageContainer}
                >
                    <Image
                        source={{ uri: image }}
                        style={styles.fullScreenImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={showDeleteModal}
                onRequestClose={hideEditModal}
            >
                <Pressable style={styles.editContainer} onPress={hideEditModal}>
                    <View style={[styles.editView, moreButtonHeight]}>
                        {groupPress ? (
                            <TouchableOpacity style={styles.editFiles} onPress={handleGroupPress}>
                                <FilesSvg />
                                <Text style={styles.editFilesText}>Бүлэглэх</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.editFiles} onPress={handleEditPress}>
                                <FilesSvg />
                                <Text style={styles.editFilesText}>Засах</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity style={styles.deleteFiles} onPress={openDeleteCardModal}>
                            <TrashSvg color="#6B6F7E" />
                            <Text style={styles.deleteFilesText}>Устгах</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </>
    );
}

export default Card;
