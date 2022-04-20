import { StyleSheet, Dimensions } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width,
        height,
        backgroundColor: 'transparent',
    },
    pressable: {
        position: 'absolute',
        width: widthCalculator(327),
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        top: Calculator(186),
        left: widthCalculator(24),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 10,
        zIndex: 10,
        paddingVertical: Calculator(26),
        paddingHorizontal: widthCalculator(24),
        paddingBottom: Calculator(38),
    },
    companyView: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    textStyle: {
        fontWeight: '700',
        fontSize: fontCalculator(14),
        marginBottom: Calculator(17),
        color: '#000000',
    },
    groupMapContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
