import { StyleSheet } from 'react-native';
import fontCalculator from '../../../utils/fontCalculator';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: fontCalculator(12),
        color: '#C3C3C3',
        marginTop: 13,
        fontWeight: '700',
    },
});
