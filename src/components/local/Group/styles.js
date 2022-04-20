import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';

export default StyleSheet.create({
    container: {
        paddingHorizontal: Calculator(9),
        height: Calculator(32),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginRight: 6,
        marginBottom: 6,
    },
    text: {
        fontSize: fontCalculator(12),
        color: '#ffffff',
        fontWeight: '700',
    },
});
