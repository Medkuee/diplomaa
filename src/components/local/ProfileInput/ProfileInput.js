import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

function ProfileInput({title, onChangeText, value}) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.textTitle]}>{title}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[styles.textInput]}></TextInput>
      <View style={[styles.seperator]}></View>
    </View>
  );
}

export default ProfileInput;
