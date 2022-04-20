import { Dimensions } from 'react-native';

export default function borderCalculator(height2, border) {
    const height = Dimensions.get('screen').height;
    const undur = (height2 * 100) / 812;

    const daraah = (height * undur) / 100;

    const radius = (daraah * border) / height2;

    return radius;
}
