import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';
import borderCalculator from '../../../utils/borderCalculator';
import fontCalculator from '../../../utils/fontCalculator';

const height = Dimensions.get('screen').height;
const undur = (height * 6.4) / 100;

export default StyleSheet.create({
    container: {
        width: '74.5%',
        height: undur,
        marginBottom: 14,
        overflow: 'hidden',
        borderRadius: borderCalculator(52, 10),
    },
    linear: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderCalculator(52, 10),

        flexDirection: 'row',
    },
    text: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: fontCalculator(16),
    },
});
