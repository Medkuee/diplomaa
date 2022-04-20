import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';

export default StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.white,
    },
    logoView: {
        marginTop: Calculator(153),
        marginBottom: Calculator(97),
    },
    loginTouchable: { fontWeight: 'bold' },
    signUpText: {
        fontWeight: '500',
        fontSize: fontCalculator(14),
        color: '#7C7C7C',
        lineHeight: Calculator(30),
    },
    confirmNewPasscode: { marginBottom: Calculator(22) },
    changePasswordButton: { marginBottom: Calculator(230) },
});
