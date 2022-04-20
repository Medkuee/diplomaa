import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import borderCalculator from '../../utils/borderCalculator';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';
import widthCalculator from '../../utils/widthCalculator';

export const width = Dimensions.get('screen').width;
export const height = Calculator(230);
export const ListPaddingBottom = 100;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    backArrowTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Calculator(58),
        left: 17,
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: Calculator(32),
    },
    profileText: {
        fontWeight: 'bold',
        fontSize: fontCalculator(18),
        color: '#242D4D',
        flex: 1,
        marginLeft: 8,
    },
    profileBlue: {
        width: '88%',
        height: '16.8%',
        flexDirection: 'row',
        backgroundColor: '#242D4D',
        borderRadius: 10,
        paddingLeft: widthCalculator(28),
        paddingTop: Calculator(19),
        marginBottom: '6%',
        position: 'relative',
    },
    nameText: {
        fontSize: fontCalculator(16),
        color: '#FFFFFF',
        fontWeight: '500',
    },
    showcurrencyText: {
        fontSize: fontCalculator(12),
        color: '#7D8AB7',
        fontWeight: '500',
        marginVertical: Calculator(2),
    },
    currencyText: {
        fontSize: fontCalculator(25),
        color: '#fff',
        fontWeight: '500',
    },
    profileBox: {
        width: widthCalculator(116),
        height: Calculator(116),
        borderRadius: borderCalculator(116, 43),
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        position: 'absolute',
        right: '7%',
        top: '-50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f3f2',
    },
    cardView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    appbuttonView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageBackGround: {
        width: '100%',
        height: '100%',
    },
    defaultImageBackGround: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    changeProfileIcon: {
        position: 'absolute',
        bottom: '15%',
        right: '5%',
    },
    backArrowView: {
        paddingVertical: Calculator(15),
        paddingHorizontal: widthCalculator(15),
    },
    profileView: {
        marginBottom: Calculator(8),
        height: Calculator(26),
        width: Calculator(91),
    },
    scrollViewStyle: {
        paddingBottom: Calculator(400),
    },

    list: {
        flex: 1,
        width: '88%',
        height: '100%',
    },
    listContentContainer: {
        paddingBottom: ListPaddingBottom,
    },
    recyclerFooterContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
