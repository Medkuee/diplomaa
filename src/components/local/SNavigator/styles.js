import { StyleSheet, Dimensions } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';

const height = Dimensions.get('screen').height;

const undur = height > 750 ? Calculator(37) : Calculator(23);

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        paddingHorizontal: Calculator(32),
        backgroundColor: 'white',
        paddingBottom: undur,
        paddingTop: undur / 2,
    },
    text: {
        fontSize: fontCalculator(12),
        color: '#C3C3C3',
        marginTop: 13,
        fontWeight: '700',
    },
});
