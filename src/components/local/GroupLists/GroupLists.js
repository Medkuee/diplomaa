import React from 'react';
import { Text, Pressable, Modal, FlatList, View } from 'react-native';

import styles from './styles';
import Group from '../Group';

function GroupLists({ groups, onClose, onPressItem, visibility }) {
    const seeListedGroups = async (id) => {
        onPressItem(id);
    };

    const renderItem = (item) => (
        <Group
            name={item.name}
            color={item.color}
            handleDelete={() => seeListedGroups(item.id)}
            onPress={() => seeListedGroups(item.id)}
        />
    );

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visibility}
            onRequestClose={onClose}
        >
            <Pressable style={[styles.container]} onPress={onClose}>
                <Pressable style={[styles.pressable]}>
                    <Text style={[styles.textStyle]}>Бүлгүүд</Text>

                    <View style={styles.groupMapContainer}>
                        {
                            groups.length > 0 && groups.map(renderItem)
                            // <FlatList
                            //     style={{
                            //         justifyContent: 'center',
                            //         flexDirection: 'row',
                            //         flexWrap: 'wrap',
                            //     }}
                            //     // horizontal
                            //     data={groups}
                            //     renderItem={renderItem}
                            //     keyExtractor={(item) => item.id}
                            // />
                        }
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default GroupLists;
