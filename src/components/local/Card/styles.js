import { StyleSheet, Dimensions } from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

const { width, height } = Dimensions.get('screen');

console.log(width);

export default StyleSheet.create({
    container: {
        width: widthCalculator(318),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Calculator(24),
    },
    imageView: {
        width: widthCalculator(330),
        height: Calculator(164),
        backgroundColor: '#f2f3f2',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: Calculator(16),
        zIndex: -1,
        elevation: -1,
    },

    iconView: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '30%',
        borderRadius: 6,
        justifyContent: 'space-around',
        left: Calculator(14),
        top: Calculator(11),
        alignItems: 'center',
        color: 'white',
        flexDirection: 'row',
        height: '24.4%',
        paddingHorizontal: 8,
    },
    iconContainer: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    verifiedView: {
        width: Calculator(27.5),
        height: Calculator(27.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        right: Calculator(14.25),
        top: Calculator(12.25),
        position: 'absolute',
    },

    imageBackGround: {
        width: '100%',
        height: '100%',
    },
    // fullScreenImageContainer: {
    //     // width: '100%',
    //     // height: '100%',
    //     backgroundColor: 'green',
    //     flex: 1,
    //     // position: 'relative',
    //     // width: height,
    //     // height: width,
    // },
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

    // fullScreenImage: {
    //     // transform: [{ rotate: '90deg' }],

    //     // position: 'absolute',
    //     // right: 0,
    //     // top: 0,

    //     // width: width,
    //     // height: height,
    //     // opacity: 0.2,
    //     // flex: 1,

    //     // width: '100%',
    //     // height: '100%',
    //     // top: 0,
    //     // left: 0,
    //     // right: 0,
    //     // flex: 1,
    //     // flex: 1,
    //     // top: 0,
    //     // left: 0,
    //     // width: 100,
    //     // height: 800,
    //     height: '100%',
    //     width: '100%',
    //     backgroundColor: 'red',
    // },
    imageBackGroundText: {
        fontSize: fontCalculator(12),
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
        marginLeft: widthCalculator(10),
    },
    nameText: {
        fontWeight: '500',
        fontSize: fontCalculator(15),
        color: '#333333',
    },
    companyNameText: {
        fontWeight: '500',
        fontSize: fontCalculator(11),
        color: '#9E9E9E',
    },
    editContainer: {
        width,
        height,
        flex: 1,
        zIndex: 20,
        elevation: 20,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editView: {
        // position: 'relative',
        // bottom: '4%',
        // left: '10%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginTop: -86,

        filter: 'drop-shadow(0px 4px 23px rgba(0, 0, 0, 0.25))',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        position: 'absolute',
        opacity: 0,

        right: (width - widthCalculator(318)) / 2,
    },
    editFiles: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 17,
        paddingVertical: 12,
        width: widthCalculator(182),
        borderRadius: 6,
    },
    editFilesText: {
        color: '#373A46',
        fontSize: 14,
        marginLeft: 19,
        fontWeight: 'bold',
    },
    deleteFiles: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 21,
        paddingVertical: 12,
        width: widthCalculator(182),
        borderRadius: 6,
    },
    deleteFilesText: {
        color: '#373A46',
        fontSize: 14,
        marginLeft: 21,
        fontWeight: 'bold',
    },
    touchableOpacityMailIcon: {
        fontSize: fontCalculator(20),
    },
});
