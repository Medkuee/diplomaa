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
        marginTop: Calculator(9),
    },

    modalText: {
        textAlign: 'center',
        fontSize: fontCalculator(12),
        fontWeight: '500',
        color: '#3d3d3d',
        lineHeight: Calculator(14),
    },
    successView: {
        width: Calculator(301),
        height: Calculator(148),
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
