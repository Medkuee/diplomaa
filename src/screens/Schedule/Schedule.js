import React, {useEffect, useState, useContext} from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';

//styles
import styles from './styles';
import ArrowSvg from '../../assets/icons/ArrowSvg';

// store
import AppButton from '../../components/local/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../../components/local/CustomTextInput';
import Search1Svg from '../../assets/icons/Search1Svg';

function Schedule({navigation, route}) {
  const {department, year} = route.params;
  const [data, setData] = useState([]);
  const [classes, setClasses] = useState([
    'Class1',
    'Class2',
    'Class3',
    'Class4',
    'Class5',
    'Class6',
    'Class7',
    'Class8',
    'Class9',
    'Class10',
    'Class11',
  ]);

  console.log(department, year);

  const navigateActivity = () => {
    navigation.navigate('Activity', {
      data: data,
      department: department,
      year: year,
    });
  };

  const registerClass = id => {
    let filteredArray = classes.filter(item => item !== classes[id]);
    setClasses(filteredArray);
    setData([...data, classes[id]]);
  };

  console.log(classes, 'dataa', data);

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>Available Courses</Text>
        </View>
        <View style={[styles.headerNameContainer]}>
          <Text style={[styles.headerName]}>
            {department} {year}
          </Text>
        </View>

        <CustomTextInput
          placeholder="Search..."
          style={[styles.inputTextStyle]}
          textStyle={{fontSize: 16}}>
          <Search1Svg />
        </CustomTextInput>

        <ScrollView style={[styles.scrollView]}>
          <View style={[styles.scrollViewContainer]}>
            {classes.map((classy, index) => (
              <AppButton
                key={`button${index}`}
                style={[styles.appButton]}
                textStyle={{color: 'black'}}
                text={classy}
                background={{
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                }}
                onPress={() => registerClass(index)}>
                <ArrowSvg color="#3E256D" />
              </AppButton>
            ))}
          </View>
        </ScrollView>

        <View style={[styles.bottom]}>
          <Pressable
            style={[styles.bottomContainer, {backgroundColor: 'white'}]}
            onPress={navigateActivity}>
            <Text style={[styles.bottomContainerText, {color: 'black'}]}>
              Activity
            </Text>
          </Pressable>
          <Pressable style={[styles.bottomContainer]}>
            <Text style={[styles.bottomContainerText]}>Schedule</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Schedule;
