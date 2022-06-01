import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

//styles
import styles from './styles';

//utils
import Calculator from '../../utils/calculator';

//assets
import SmartphoneSvg from '../../assets/icons/SmartphoneSvg';
import LockSvg from '../../assets/icons/LockSvg';

//components
import CustomTextInput from '../../components/local/CustomTextInput';
import AppButton from '../../components/local/AppButton';

import axios from 'axios';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
  });

  const handleRegistration = async () => {
    if (password === verifyPassword) {
      let res = await api.post('custom_users/register', {
        password: password,
        email: email,
      });
      if (res.data.status === 'success') {
        setEmail('');
        setPassword('');
        setVerifyPassword('');
        navigation.navigate('Login');
      } else {
        alert('An error occurred');
      }

      console.log(
        'SIgnup Response',
        res.data,
        res.data.status === 'success',
        res.data.status,
      );
    } else {
      alert('Wrong Password');
    }
  };

  return (
    <View style={[styles.signUpContainer]}>
      <View style={[styles.logoView]}>
        <Image source={require('../../assets/images/miuLogo.png')} />
        <Image source={require('../../assets/images/WISELogo.png')} />
      </View>
      <CustomTextInput
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        maxLength={50}
        keyboardType="numeric">
        <SmartphoneSvg />
      </CustomTextInput>
      <CustomTextInput
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        maxLength={16}>
        <LockSvg />
      </CustomTextInput>
      <CustomTextInput
        style={{marginBottom: Calculator(22)}}
        placeholder="Confirm Password"
        value={verifyPassword}
        onChangeText={setVerifyPassword}
        secureTextEntry
        maxLength={16}>
        <LockSvg />
      </CustomTextInput>

      <View style={[styles.loginButtonView]}>
        <AppButton
          style={[styles.appButtonLogin]}
          text="Register"
          onPress={handleRegistration}
        />
      </View>

      <TouchableOpacity style={[styles.loginTouchable]} onPress={navigateLogin}>
        <Text style={styles.signUpText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;
