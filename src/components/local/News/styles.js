import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: Calculator(40),
    },
    imageView: {
        width: '100%',
        height: Calculator(164),
        marginTop: Calculator(8),
        marginBottom: Calculator(26),
        borderRadius: 10,
        resizeMode: 'cover',
    },
    textStyle: {
        fontSize: fontCalculator(16),
        fontWeight: '500',
        color: '#242D4D',
        marginBottom: Calculator(8),
        width: '88%',
    },
    companyText: {
        fontSize: fontCalculator(12),
        fontWeight: '500',
        height: Calculator(24),
    },
    imageContainer: {
        width: '88%',
    },
    contentText: {
        width: '88%',
        fontSize: fontCalculator(12),
        fontStyle: 'normal',
        color: 'gray',
    },
});
