import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//styles
import styles from './styles';
import ArrowSvg from '../../assets/icons/ArrowSvg';

// store
import AppButton from '../../components/local/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../../components/local/CustomTextInput';
import Search1Svg from '../../assets/icons/Search1Svg';
import ArrowSvg1 from '../../assets/icons/ArrowSvg1';

import axios from 'axios';

// const day = [
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   '11',
//   '12',
//   '13',
//   '14',
//   '15',
//   '16',
//   '17',
//   '18',
//   '19',
//   '20',
//   '21',
//   '22',
//   '23',
//   '24',
//   '25',
//   '26',
//   '27',
//   '28',
//   '29',
//   '30',
// ];
// const month = [
//   '01',
//   '02',
//   '03',
//   '04',
//   '05',
//   '06',
//   '07',
//   '08',
//   '09',
//   '10',
//   '11',
//   '12',
// ];
// const hour = [
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   '11',
//   '12',
//   '13',
//   '14',
//   '15',
//   '16',
//   '17',
//   '18',
//   '19',
//   '20',
//   '21',
//   '22',
//   '23',
//   '24',
// ];
// const minute = [
//   '0',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   '11',
//   '12',
//   '13',
//   '14',
//   '15',
//   '16',
//   '17',
//   '18',
//   '19',
//   '20',
//   '21',
//   '22',
//   '23',
//   '24',
//   '25',
//   '26',
//   '27',
//   '28',
//   '29',
//   '30',
//   '31',
//   '32',
//   '33',
//   '34',
//   '35',
//   '36',
//   '37',
//   '38',
//   '39',
//   '40',
//   '41',
//   '42',
//   '43',
//   '44',
//   '45',
//   '46',
//   '47',
//   '48',
//   '49',
//   '50',
//   '51',
//   '52',
//   '53',
//   '54',
//   '55',
//   '56',
//   '57',
//   '58',
//   '59',
// ];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periods = [
  '8:00 - 9:30',
  '9:40 - 11:10',
  '11:20 - 12:50',
  '13:00 - 14:30',
  '14:40 - 16:10',
  '16:20 - 17:50',
  '18:00 - 19:30',
];

const colors = ['#EA8181', '#9FA8FA', '#8CD3FD'];

function AddSchedule({navigation, route}) {
  const {loginToken} = route.params;

  const [day, setDay] = useState('');
  const [period, setPeriod] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseProfessor, setCourseProfessor] = useState('');
  const [color, setColor] = useState('');

  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
  });

  const handleAdd = () => {
    const data = {
      day: day,
      period: period,
      course_name: courseName,
      course_professor: courseProfessor,
      color: color,
    };
    api
      .post('posts', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setDay('');
        setPeriod('');
        setCourseName('');
        setCourseProfessor('');
        setColor('');
        navigation.push('Schedule', {
          loginToken: loginToken,
        });
      })
      .catch(function (error) {
        alert('Complete all the fields');
      });
  };

  const goBackTo = () => {
    navigation.push('Schedule', {
      loginToken: loginToken,
    });
  };

  console.log(day, period, courseName, courseProfessor, color);

  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <Text style={[styles.headerText]}></Text>
      </View>
      <View style={[styles.headerNameContainer]}>
        <TouchableOpacity
          style={[styles.closeBackContainer]}
          onPress={goBackTo}>
          {/* <Image
            style={[styles.closeBack]}
            source={require('../../assets/images/closeRed.png')}
          /> */}
          <ArrowSvg1 />
        </TouchableOpacity>
        <Text style={[styles.headerName]}>Add Course</Text>
      </View>

      <View style={[styles.bodyContainer]}>
        <Text style={[styles.bodyName]}>Date and Time</Text>

        <View style={[styles.timeTitle]}>
          <View style={[styles.timeTitleContainer]}>
            <Text style={[styles.timeTitleText]}>Day</Text>
          </View>
          <View style={[styles.timeTitleContainer]}>
            <Text style={[styles.timeTitleText]}>Period</Text>
          </View>
        </View>

        <View style={[styles.timeTitle, {marginBottom: 0}]}>
          <View style={[styles.scrollViewContainer]}>
            <ScrollView style={[styles.scrollView]}>
              {days.map(d => (
                <TouchableOpacity
                  key={`days${d}`}
                  style={[styles.scrollViewTouchableOpacity]}
                  onPress={() => setDay(d)}>
                  <Text style={[styles.timeTitleText]}>{d}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={[styles.scrollViewContainer]}>
            <ScrollView style={[styles.scrollView]}>
              {periods.map(d => (
                <TouchableOpacity
                  key={`periods${d}`}
                  style={[styles.scrollViewTouchableOpacity]}
                  onPress={() => setPeriod(d)}>
                  <Text style={[styles.timeTitleText]}>{d}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <Text style={[styles.bodyName]}>Course Name</Text>
        <CustomTextInput
          placeholder="Write the course name"
          onChangeText={setCourseName}
          value={courseName}
          style={[styles.customContainerStyle]}></CustomTextInput>
        <Text style={[styles.bodyName]}>Course Professor</Text>
        <CustomTextInput
          placeholder="Write the course professor"
          onChangeText={setCourseProfessor}
          value={courseProfessor}
          style={[styles.customContainerStyle]}></CustomTextInput>
        <Text style={[styles.bodyName]}>Color</Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginLeft: 40,
          }}>
          {colors.map(color => (
            <TouchableOpacity
              key={`colors${color}`}
              onPress={() => setColor(color)}
              style={{
                backgroundColor: color,
                width: 30,
                height: 30,
                borderRadius: 15,
                marginRight: 15,
              }}
            />
          ))}
        </View>
        <TouchableOpacity style={[styles.saveButton]} onPress={handleAdd}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddSchedule;
