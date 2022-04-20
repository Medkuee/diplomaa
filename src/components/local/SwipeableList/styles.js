import { StyleSheet } from 'react-native';
import borderCalculator from '../../../utils/borderCalculator';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

export default StyleSheet.create({
    swipeableView: {
        backgroundColor: '#AAAAAA',
        width: Calculator(99),
        height: Calculator(40),
        marginTop: Calculator(20),
        marginRight: Calculator(24),
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    swipeableText: {
        fontSize: fontCalculator(12),
        fontWeight: '700',
        color: '#ffffff',
    },
    allowanceButton: {
        width: widthCalculator(99),
        height: Calculator(40),
        marginBottom: 0,
    },
    listContainer: {
        width: '87%',
        height: Calculator(79),
        backgroundColor: '#F2F3F2',
        borderRadius: borderCalculator(79, 10),
        left: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        marginBottom: Calculator(11),
    },
    image: {
        width: widthCalculator(40),
        height: widthCalculator(40),
        marginRight: 10,
        borderRadius: 5,
    },
    name: {
        fontWeight: '500',
        fontSize: fontCalculator(14),
        color: '#333333',
    },
    date: {
        fontWeight: '500',
        fontSize: fontCalculator(12),
        color: '#9E9E9E',
    },
    listContainerView: {
        flex: 1,
    },
    gradientButtonStyle: {
        fontSize: fontCalculator(12),
    },
});
