import React, {useState, useContext, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
//styles
import styles from './styles';

//components
import CustomTextInput from '../../components/local/CustomTextInput';
import AppButton from '../../components/local/AppButton';

//assets
import SmartphoneSvg from '../../assets/icons/SmartphoneSvg';
import LockSvg from '../../assets/icons/LockSvg';

function ProfileDetail({navigation}) {
  return (
    <View style={[styles.loginContainer]}>
      <Text>Profile Detail Screen</Text>
    </View>
  );
}

export default ProfileDetail;
