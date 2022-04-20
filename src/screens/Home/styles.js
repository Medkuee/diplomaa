import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';
import widthCalculator from '../../utils/widthCalculator';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    height: '100%',
    backgroundColor: 'white',
    paddingBottom: Calculator(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeHeader: {
    fontSize: 25,
    marginBottom: Calculator(70),
    marginRight: 10,
  },
  appButton: {
    width: widthCalculator(130),
    marginRight: 10,
    backgroundColor: '#3E256D',
  },
  mainContent: {
    width: '74.5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
