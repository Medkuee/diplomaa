import { Dimensions } from 'react-native';

export default function Calculator(height2) {
    const height = Dimensions.get('screen').height;
    const undur = (height2 * 100) / 812;

    const daraah = (height * undur) / 100;

    return daraah;
}
