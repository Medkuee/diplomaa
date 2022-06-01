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

import axios from 'axios';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
  });

  const handleLogin = async () => {
    let res = await api.post('custom_users/login', {
      email: email,
      password: password,
    });
    if (res.data.status === 'success') {
      setEmail('');
      setPassword('');

      if (res.data.data.userLogin.name) {
        navigation.navigate('Schedule', {
          loginToken: res.data.data.loginToken,
        });
      } else {
        navigation.navigate('Home', {
          loginToken: res.data.data.loginToken,
        });
      }
    } else {
      alert('An error occurred');
    }

    console.log('Login Response', res.data.data.userLogin);
  };

  return (
    <View style={[styles.loginContainer]}>
      <View style={[styles.loginView]}>
        <Image source={require('../../assets/images/miuLogo.png')} />
        <Image source={require('../../assets/images/WISELogo.png')} />
      </View>

      <CustomTextInput
        style={[styles.InputTextMargin]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        maxLength={50}
        keyboardType="numeric">
        <SmartphoneSvg />
      </CustomTextInput>
      <CustomTextInput
        style={[styles.InputTextMarginTwenty2]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        maxLength={16}>
        <LockSvg />
      </CustomTextInput>

      <View style={[styles.loginButtonView]}>
        <AppButton
          style={[styles.appButtonLogin]}
          onPress={handleLogin}
          text="Login"
        />
      </View>

      <View style={[styles.signUpView]}>
        <TouchableOpacity
          style={[styles.signUpText]}
          onPress={handleNavigateSignUp}>
          <Text style={[styles.loginText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
