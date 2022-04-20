import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

export default StyleSheet.create({
    container: {
        backgroundColor: '#F2F3F2',
        width: '87%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: Calculator(164),
        left: 25,
        overflow: 'hidden',
        marginBottom: Calculator(11),
    },
    iconView: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 3,
        right: 15,
    },

    iconTouchable: {
        fontSize: fontCalculator(12),
        width: widthCalculator(45),
        height: Calculator(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.37)',
        borderRadius: 6,
    },
    saveButton: { height: Calculator(40), width: widthCalculator(96) },

    sendButton: {
        height: Calculator(40),
        width: widthCalculator(96),
    },
    imageBackGround: {
        width: '100%',
        height: '100%',
    },
    appButtonStyle: {
        fontSize: fontCalculator(12),
    },
    fullScreenImageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        flex: 1,
    },

    fullScreenImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        transform: [{ rotate: '90deg' }],
    },
});
