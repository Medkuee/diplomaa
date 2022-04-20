import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default function widthCalculator(width2) {
    return (width * width2) / 375;
}
