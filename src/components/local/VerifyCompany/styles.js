import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView1: {
        backgroundColor: 'rgba(20, 23, 33, 0.74)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: Calculator(217),
        paddingHorizontal: 40,
        marginVertical: Calculator(31),
    },

    modalText: {
        textAlign: 'center',
        fontSize: fontCalculator(12),
        fontWeight: '500',
        color: '#3d3d3d',
        lineHeight: Calculator(14),
    },
    centeredViewBox: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    inputText: {
        marginBottom: Calculator(31),
    },
    appButtonStyle: {
        width: Calculator(95),
        height: Calculator(40),
        marginBottom: Calculator(31),
    },
});
