import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    modalView: {
        width: '100%',
        height: '100%',
        paddingHorizontal: widthCalculator(40),
        backgroundColor: 'rgba(20, 23, 33, 0.74)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        textAlign: 'center',
        fontWeight: '500',
        color: '#3d3d3d',
        lineHeight: Calculator(14),
        fontSize: fontCalculator(16),
        marginTop: Calculator(50),
        marginBottom: Calculator(19),
    },
    buttonView: {
        flexDirection: 'row',
        left: widthCalculator(68),
    },
    modalBox: {
        width: widthCalculator(353),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingBottom: Calculator(49),
    },
    alertText: {
        textAlign: 'center',
        fontSize: fontCalculator(12),
        fontWeight: '500',
        color: '#9F9F9F',
        lineHeight: Calculator(14),
        marginBottom: Calculator(23),
    },
    appButtonStyle: {
        height: Calculator(40),
        width: widthCalculator(96),
        color: '#F2F3F2',
        marginRight: widthCalculator(26),
    },
    appButton: {
        height: Calculator(40),
        width: widthCalculator(96),
    },
    cancelText: {
        fontSize: fontCalculator(12),
        color: '#7C7C7C',
    },
    allowText: {
        fontSize: fontCalculator(12),
        color: '#FFFFFF',
    },
});
