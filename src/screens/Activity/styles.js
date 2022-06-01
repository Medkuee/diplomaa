import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';
import widthCalculator from '../../utils/widthCalculator';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#59425B',
  },
  header: {
    width: '100%',
    height: Calculator(50),
    // borderStyle: 'solid',
    // borderBottomColor: 'black',
    // borderBottomWidth: 2,
    backgroundColor: '#59425B',
    paddingLeft: 40,
  },
  headerNameContainer: {
    width: '100%',
    height: Calculator(100),
    backgroundColor: '#59425B',
    paddingLeft: 40,
    borderBottomWidth: 20,
    borderColor: '#59425B',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginTop: 30,
  },
  headerName: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  closeBack: {
    width: '100%',
    height: '100%',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: Calculator(50),
  },
  bottomContainer: {
    width: '50%',
    backgroundColor: '#59425B',
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
    borderRadius: 10,
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
  addImageContainer: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 20,
    marginTop: 20,
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
  addImage: {
    width: '100%',
    height: '100%',
  },
  bodyContainer: {
    height: '85%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: -35,
  },
  dayCounter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 10,
  },
  dayCounterBox: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 5,
  },
});
