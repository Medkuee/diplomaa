import {StyleSheet} from 'react-native';
import borderCalculator from '../../utils/borderCalculator';

//utils
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';

export default StyleSheet.create({
  loginContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },

  loginView: {
    marginBottom: Calculator(97),
    marginTop: Calculator(153),
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginButtonView: {
    flexDirection: 'row',
    width: '74.5%',
    height: Calculator(52),
    marginBottom: Calculator(188),
  },
  checkView: {
    width: '75%',
    flexDirection: 'row',
    marginBottom: Calculator(167),
    height: Calculator(20),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkmarkTouchable: {
    marginRight: 13.67,
  },
  loginText: {
    fontWeight: '500',
    fontSize: fontCalculator(14),
    color: '#7C7C7C',
    lineHeight: Calculator(30),
  },
  signUpView: {
    bottom: Calculator(37),
    alignItems: 'center',
    height: Calculator(40),
  },
  appButtonLogin: {
    width: '100%',
    height: '100%',
    flex: 4.2,
    marginRight: 4,
    backgroundColor: '#3E256D',
  },
  appButtonFingerPrint: {
    height: '100%',
    flex: 1,
    backgroundColor: '#FF4744',
  },
  saveText: {
    color: '#C3C3C3',
  },
  signUpText: {
    fontWeight: 500,
  },
  appButtonStyle: {
    borderRadius: borderCalculator(52, 10),
  },
  InputTextMargin: {
    marginBottom: Calculator(14),
  },
  InputTextMarginTwenty2: {
    marginBottom: Calculator(22),
  },
});
