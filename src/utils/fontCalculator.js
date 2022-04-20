import { Dimensions } from 'react-native';

export default function fontCalculator(height2) {
    const height = Dimensions.get('screen').height;
    if (height < 400) {
        if (height2 < 15) {
            return height2 - 2;
        } else if (height2 < 20) {
            return height2 - 3;
        } else if (height2 < 25) {
            return height2 - 4;
        } else {
            return height2 - 6;
        }
    }

    return height2;
}
