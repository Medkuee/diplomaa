import { StyleSheet } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

export default StyleSheet.create({
    topView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backArrowView: {
        flexDirection: 'row',
        marginTop: Calculator(56),
        width: '88%',
        marginBottom: Calculator(31),
        height: Calculator(45),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    touchableArrow: {
        paddingVertical: Calculator(15),
        paddingRight: widthCalculator(15),
        marginRight: Calculator(8),
    },
    listText: {
        fontWeight: 'bold',
        fontSize: fontCalculator(18),
        color: '#242D4D',
        flex: 1,
    },
    logoView: {
        marginLeft: widthCalculator(15),
    },
});
