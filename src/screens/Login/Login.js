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

function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigateSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={[styles.loginContainer]}>
      <View style={[styles.loginView]}>
        <Image source={require('../../assets/images/miuLogo.png')} />
        <Image source={require('../../assets/images/WISELogo.png')} />
      </View>

      <CustomTextInput
        style={[styles.InputTextMargin]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        maxLength={8}
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
