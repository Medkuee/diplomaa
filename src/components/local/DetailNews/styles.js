import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

export default StyleSheet.create({
    newsView: {
        backgroundColor: '#F2F3F2',
        width: widthCalculator(326),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: Calculator(174),
        left: 25,
        overflow: 'hidden',
        marginRight: Calculator(31),
        marginBottom: Calculator(31),
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        paddingLeft: 13,
        paddingRight: 17,
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    newsText: {
        width: '100%',
        backgroundColor: 'rgba(5, 5, 5, 0.4)',
        borderRadius: 6,
        paddingLeft: 14,
        paddingRight: 69,
        paddingVertical: 10,
    },

    newsTitle: {
        fontSize: fontCalculator(12),
        fontWeight: '700',
        color: 'white',
    },
});
