import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';

export default StyleSheet.create({
  signUpContainer: {
    backgroundColor: colors.white,
    alignItems: 'center',

    height: '100%',
  },
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.white,
  },
  logoView: {
    marginTop: Calculator(153),
    marginBottom: Calculator(97),
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginTouchable: {
    fontWeight: 'bold',
    justifySelf: 'flex-end',
  },
  signUpText: {
    fontWeight: '500',
    fontSize: fontCalculator(14),
    color: '#7C7C7C',
    lineHeight: Calculator(30),
    height: Calculator(40),
  },
  appButtonLogin: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3E256D',
  },
  loginButtonView: {
    flexDirection: 'row',
    width: '74.5%',
    height: Calculator(52),
    marginBottom: Calculator(120),
  },
});
