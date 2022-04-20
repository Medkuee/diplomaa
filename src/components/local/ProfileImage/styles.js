import { StyleSheet, Dimensions } from 'react-native';
import Calculator from '../../../utils/calculator';
import widthCalculator from '../../../utils/widthCalculator';

export default StyleSheet.create({
    profileImage: {
        width: widthCalculator(40),
        height: widthCalculator(40),
        borderRadius: 5,
        position: 'relative',
    },
    defaultImage: {
        backgroundColor: '#f2f3f2',
    },
});
