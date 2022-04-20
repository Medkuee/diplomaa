import React, { useRef, useState } from 'react';
import { View, Text, Pressable, Modal, FlatList } from 'react-native';

import styles from './styles';
import Group from '../Group';
import CustomTextInput from '../CustomTextInput';
import Colour from '../Colour';
import GradientButton from '../GradientButton';

const colours = ['#FA3A2F', '#A651BB', '#0081BE', '#01C099', '#F9C300', '#FE9800', '#E34900'];
const defaultColour = '#CBCBCB';

function EditGroups({
    groups,
    handleSave,
    handleClose,
    handleDeleteGroups,
    handleCardGroupAssignment,
    visibility,
}) {
    const [name, setName] = useState('');
    const [colour, setColour] = useState(defaultColour);

    const listNameRef = useRef(null);

    const createGroups = () => {
        if (name && colour !== defaultColour) {
            setColour(defaultColour);
            setName('');
            handleSave(name, colour);
        }
    };

    const handleBlur = () => {
        listNameRef.current.blur();
    };

    const renderItem = (item) => (
        <Group
            name={item.name}
            color={item.color}
            handleDelete={() => handleDeleteGroups(item.id)}
            onPress={() => handleCardGroupAssignment(item.id)}
        />
    );

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visibility}
            onRequestClose={() => {
                handleClose();
            }}
        >
            <Pressable style={[styles.container]} onPress={handleClose}>
                <Pressable style={[styles.pressable]} onPress={handleBlur}>
                    <Text style={[styles.text]}>Бүлгүүд</Text>

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

                    <View style={[styles.seperator]} />

                    <Text style={[styles.addGroupText]}>Бүлэг нэмэх</Text>

                    <CustomTextInput
                        placeholder="Бүлгийн нэр"
                        style={[styles.inputTextStyle]}
                        onChangeText={setName}
                        value={name}
                        inputRef={listNameRef}
                    >
                        <Colour color={colour} />
                    </CustomTextInput>

                    <View style={[styles.groupContainer]}>
                        {colours.map((color, index) => (
                            <Colour
                                key={`color${index}`}
                                color={color}
                                onPress={() => setColour(color)}
                            />
                        ))}
                    </View>

                    <View style={[styles.saveContainer]}>
                        <GradientButton
                            onPress={createGroups}
                            textStyle={[styles.appButtonStyleSize]}
                            style={[styles.appButtonStyle]}
                            text="Хадгалах"
                        />
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default EditGroups;
