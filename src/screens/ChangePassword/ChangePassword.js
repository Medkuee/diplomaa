import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//styles
import styles from './styles';

//providers
import {GlobalContext} from '../../providers/store';

//utils
import KeyboardDismiss from '../../providers/KeyboardDismiss';

//assets
import BackSvg from '../../assets/icons/BackSvg';
import LockSvg from '../../assets/icons/LockSvg';

//components
import CustomTextInput from '../../components/local/CustomTextInput';
import GradientButton from '../../components/local/GradientButton';

function ChangePassword({navigation}) {
  const {state, dispatch} = useContext(GlobalContext);
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  // const handleUpdatePassword = async () => {
  //     if (password.length === 0) {
  //         dispatch({ type: SET_ALERT, message: 'Нууц үгээ оруулна уу' });
  //     } else if (password.length < 6) {
  //         dispatch({ type: SET_ALERT, message: 'Нууц үг 6 аас доош оронтой байна' });
  //     } else if (password !== verifyPassword) {
  //         dispatch({ type: SET_ALERT, message: `Нууц үг таарахгүй байна` });
  //     } else {
  //         if (password === verifyPassword) {
  //             const result = await updatePassword(state.reset_token, password);
  //             if (result.status === 'success') {
  //                 dispatch({
  //                     type: SET_ALERT,
  //                     message: 'Success',
  //                     alertType: ALERT_TYPES.SUCCESS,
  //                     buttonText: 'Ok, thanks',
  //                     onClose: () => navigation.navigate('Login'),
  //                 });
  //             } else {
  //                 dispatch({
  //                     type: SET_ALERT,
  //                     message: 'Алдаа гарлаа',
  //                 });
  //             }
  //         } else {
  //             dispatch({
  //                 type: SET_ALERT,
  //                 message: 'Нууц үг таарахгүй байна!',
  //             });
  //         }
  //     }
  // };

  return (
    <KeyboardDismiss>
      {/* <View style={[styles.container]}>
        <View style={[styles.logoView]}>
          <BackSvg />
        </View>
        <CustomTextInput
          value={password}
          placeholder="Нууц үг"
          onChangeText={setPassword}
          secureTextEntry
          maxLength={16}>
          <LockSvg />
        </CustomTextInput>
        <CustomTextInput
          style={[styles.confirmNewPasscode]}
          placeholder="Нууц үгийн баталгаа"
          value={verifyPassword}
          onChangeText={setVerifyPassword}
          secureTextEntry
          maxLength={16}>
          <LockSvg />
        </CustomTextInput>
        <GradientButton
          onPress={handleUpdatePassword}
          text="Нууц үг солих"
          style={styles.changePasswordButton}
        />
        <TouchableOpacity
          style={[styles.loginTouchable]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.signUpText}>Буцах</Text>
        </TouchableOpacity>
      </View> */}
      <Text>d</Text>
    </KeyboardDismiss>
  );
}

export default ChangePassword;
