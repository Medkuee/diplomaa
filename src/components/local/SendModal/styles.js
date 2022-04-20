import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';

const height = Dimensions.get('screen').height;

const undur = (height * 6.4) / 100;

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    modalView: {
        width: Calculator(217),
        paddingHorizontal: 20,
        marginBottom: Calculator(18),
    },

    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },

    buttonClose: {
        backgroundColor: '#2196F3',
    },

    modalText: {
        textAlign: 'center',
        fontSize: fontCalculator(12),
        fontWeight: '500',
        color: '#ffffff',
        lineHeight: Calculator(14),
    },
    container: {
        width: Calculator(326),
        height: undur,
        backgroundColor: colors.grayInput,
        borderRadius: 10,
        flexDirection: 'row',
        paddingLeft: Calculator(18),
        paddingRight: Calculator(7),
        paddingVertical: Calculator(7),
        alignItems: 'center',
        marginBottom: Calculator(16),
    },
    containerText: {
        fontSize: fontCalculator(21),
        fontWeight: '500',
        lineHeight: Calculator(24),
        color: '#C3C3C3',
        marginHorizontal: 11,
    },
    textInput: {
        fontWeight: '500',
        fontSize: fontCalculator(21),
        flex: 1,
        color: '#000000',
    },
    sendButton: {
        width: Calculator(55),
        height: Calculator(43),
        marginBottom: 0,
    },
    dismissView: { width: '100%', backgroundColor: 'rgba(20, 23, 33, 0.74)', flex: 1 },
});
