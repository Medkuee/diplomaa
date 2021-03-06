import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import borderCalculator from '../../utils/borderCalculator';
import Calculator from '../../utils/calculator';
import fontCalculator from '../../utils/fontCalculator';
import widthCalculator from '../../utils/widthCalculator';

export const width = Dimensions.get('screen').width;
export const height = Calculator(230);
export const ListPaddingBottom = 100;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#59425B',
  },
  header: {
    width: '100%',
    height: Calculator(50),
    backgroundColor: '#59425B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerNameContainer: {
    width: '100%',
    height: Calculator(80),
    backgroundColor: '#59425B',
    paddingLeft: 40,
    borderBottomWidth: 20,
    borderColor: '#59425B',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  headerName: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    marginTop: 10,
  },

  imageBox: {
    marginTop: 10,
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  addImageContainer: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 20,
  },
  addImage: {
    width: '100%',
    height: '100%',
  },
  bodyContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
  },
  bodyName: {
    marginTop: 40,
    color: '#59425B',
    fontSize: 18,
    fontWeight: '600',
    width: '80%',
    marginBottom: 20,
  },
  timeTitle: {
    width: '60%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeTitleText: {
    color: '#DAD7DA',
  },
  scrollViewContainer: {
    height: 100,
    width: '45%',
  },
  scrollView: {
    height: '100%',
  },
  scrollViewTouchableOpacity: {
    width: '100%',
    height: 30,
    marginBottom: 4,
    backgroundColor: '#59425B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
  customContainerStyle: {
    marginBottom: 0,
  },
  saveButton: {
    width: 100,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#FF7C4E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 40,
  },
  closeBackContainer: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  closeBack: {
    width: '100%',
    height: '100%',
  },
  dashBoard: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashBoardCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayCounter: {
    width: '90%',
    marginTop: 10,
  },
  dayCounterBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    paddingVertical: 10,
    marginVertical: 10,
  },
});
