import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

export default StyleSheet.create({
    imageView: {
        width: '100%',
        height: Calculator(164),
        backgroundColor: '#f2f3f2',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: Calculator(16),
    },
    imageBackGround: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonStyle: {
        width: widthCalculator(152),
        marginBottom: 0,
        height: Calculator(40),
    },
    appButtonStyleText: {
        fontSize: fontCalculator(12),
        textAlign: 'center',
    },
});
