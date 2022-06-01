import {StyleSheet, Dimensions} from 'react-native';
import Calculator from '../../../utils/calculator';
import fontCalculator from '../../../utils/fontCalculator';
import widthCalculator from '../../../utils/widthCalculator';

const height = Dimensions.get('screen').height;

const undur = (height * 6.4) / 100;

export default StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'column',
    paddingHorizontal: widthCalculator(20),
  },
  textTitle: {
    color: '#3E256D',
    fontSize: 16,
  },
  textInput: {
    color: 'grey',
    fontWeight: '500',
    fontSize: fontCalculator(14),
    width: '100%',
    padding: 8,
    paddingLeft: 0,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
});
