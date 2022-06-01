import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';
import widthCalculator from '../../utils/widthCalculator';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },

  headerName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginTop: 20,
  },

  header: {
    width: '100%',
    height: Calculator(120),
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#59425B',
  },
  headerNameContainer: {
    width: '100%',
    height: Calculator(50),
    paddingLeft: 40,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  seperator: {
    height: 3,
    width: '100%',
    backgroundColor: 'grey',
    marginBottom: 20,
  },
  appButton: {
    width: widthCalculator(170),
    marginRight: 10,
    backgroundColor: '#59425B',
    marginTop: 40,
  },
  imageBox: {
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '98%',
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
});
