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

function SignUp({navigation}) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.signUpContainer]}>
      <View style={[styles.logoView]}>
        <Image source={require('../../assets/images/miuLogo.png')} />
        <Image source={require('../../assets/images/WISELogo.png')} />
      </View>
      <CustomTextInput
        value={phone}
        placeholder="Username"
        onChangeText={setPhone}
        maxLength={8}
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
        placeholder="Verification"
        value={verifyPassword}
        onChangeText={setVerifyPassword}
        secureTextEntry
        maxLength={16}>
        <LockSvg />
      </CustomTextInput>

      <View style={[styles.loginButtonView]}>
        <AppButton style={[styles.appButtonLogin]} text="Register" />
      </View>

      <TouchableOpacity style={[styles.loginTouchable]} onPress={navigateLogin}>
        <Text style={styles.signUpText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;
