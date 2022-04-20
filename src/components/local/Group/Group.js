import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DeleteCardModal from '../DeleteCardModal';
import styles from './styles';

function Group({ name, color, onPress, handleDelete }) {
    const [deleteCardModal, setDeleteCardModal] = useState(false);

    const closeDeleteModal = () => {
        setDeleteCardModal(false);
    };

    const handleDeleteCards = () => {
        handleDelete();
        setDeleteCardModal(false);
    };

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: color }]}
            onPress={onPress}
            onLongPress={() => setDeleteCardModal(true)}
        >
            <Text style={[styles.text]}>{name}</Text>
            {deleteCardModal && (
                <DeleteCardModal
                    deleteCardModalVisible={deleteCardModal}
                    onClickClose={closeDeleteModal}
                    handleDelete={handleDeleteCards}
                />
            )}
        </TouchableOpacity>
    );
}

export default Group;
