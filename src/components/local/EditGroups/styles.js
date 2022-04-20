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
        elevation: 2,
        zIndex: 2,
        paddingVertical: Calculator(26),
        paddingHorizontal: widthCalculator(24),
        paddingBottom: Calculator(38),
    },
    comp: {
        // alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        fontWeight: '700',
        fontSize: fontCalculator(14),
        marginBottom: Calculator(17),
        color: '#000000',
    },
    seperator: {
        borderWidth: 1,
        borderColor: '#B9B9b9',
        borderStyle: 'dotted',
        width: '100%',
        height: 1,
        marginBottom: Calculator(26),
        marginTop: Calculator(19),
    },
    addGroupText: {
        fontSize: fontCalculator(14),
        fontStyle: 'normal',
        fontWeight: '700',
        marginBottom: Calculator(16),
        color: '#000000',
    },
    inputTextStyle: {
        width: '100%',
        height: Calculator(52),
    },
    groupContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Calculator(23),
    },
    saveContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonStyle: {
        width: Calculator(96),
        height: Calculator(40),
        marginBottom: 0,
    },
    appButtonStyleSize: {
        fontSize: fontCalculator(12),
        fontWeight: '700',
    },
    groupMapContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
