import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';
import widthCalculator from '../../utils/widthCalculator';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F7F8F9',
  },
  header: {
    width: '100%',
    height: Calculator(50),
    // borderStyle: 'solid',
    // borderBottomColor: 'black',
    // borderBottomWidth: 2,
    backgroundColor: '#3E256D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerNameContainer: {
    width: '100%',
    height: Calculator(100),
    backgroundColor: '#3E256D',
    paddingLeft: 40,
    borderBottomWidth: 20,
    borderColor: '#3E256D',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  headerName: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: Calculator(50),
  },
  bottomContainer: {
    width: '50%',
    backgroundColor: '#3E256D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainerText: {
    color: 'white',
    fontSize: 16,
  },
  appButton: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 0,
    height: Calculator(70),
  },
  scrollView: {
    width: '100%',
  },
  scrollViewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Calculator(200),
  },
  inputTextStyle: {
    width: '90%',
    height: Calculator(60),
    backgroundColor: 'white',
    paddingLeft: 29,
    marginTop: -30,
  },
});
