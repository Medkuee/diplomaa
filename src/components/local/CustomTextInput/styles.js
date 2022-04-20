import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

const height = Dimensions.get('screen').height;

const undur = (height * 6.4) / 100;

export default StyleSheet.create({
  container: {
    width: '74.5%',
    height: undur,
    backgroundColor: colors.grayInput,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: widthCalculator(20),
  },
  textInput: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: fontCalculator(14),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
