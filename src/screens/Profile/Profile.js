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

function Profile({navigation, route}) {
  const {loginToken} = route.params;

  const [data, setData] = useState({});
  const [year, setYear] = useState(null);
  const [schedule, setSchedule] = useState([]);
  // const [period, setPeriod] = useState('');
  // const [courseName, setCourseName] = useState('');
  // const [courseProfessor, setCourseProfessor] = useState('');
  // const [color, setColor] = useState('');

  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
  });

  const goBackTo = () => {
    navigation.push('Schedule', {
      loginToken: loginToken,
    });
  };

  const fetchProfile = () => {
    api
      .get('custom_users/profile', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then(res => {
        console.log('profileData', res.data);
        setData(res.data);
        if (res.data.year === 'Freshman') {
          setYear(1);
        } else if (res.data.year === 'Sophomore') {
          setYear(2);
        } else if (res.data.year === 'Junior') {
          setYear(3);
        } else {
          setYear(4);
        }
        return res.data;
      });
  };

  const fetchSchedule = () => {
    api
      .get('posts', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then(res => {
        console.log('setSchedule', res.data);
        setSchedule(res.data.data);
        return res.data;
      });
  };

  console.log('Filter kekek', schedule.filter(d => d.day === 'Monday').length);

  console.log('schedule.length', schedule && schedule.length);

  useEffect(() => {
    fetchProfile();
    fetchSchedule();
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <Text style={[styles.headerText]}></Text>
      </View>
      <View style={[styles.headerNameContainer]}>
        <TouchableOpacity
          style={[styles.closeBackContainer]}
          onPress={goBackTo}>
          <ArrowSvg1 />
        </TouchableOpacity>
        {/* <Text style={[styles.headerName]}>Profile</Text> */}
      </View>

      <View style={[styles.bodyContainer]}>
        <View style={[styles.imageBox]}>
          {data.gender === 'female' ? (
            <Image
              style={[styles.image]}
              source={require('../../assets/images/femaleProfile.jpeg')}
            />
          ) : (
            <Image
              style={[styles.image]}
              source={require('../../assets/images/maleProfile.jpeg')}
            />
          )}
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 18, marginBottom: 5}}>
            {data.last_name} {data.name}
          </Text>
          <Text style={{fontWeight: '300', color: 'grey', marginBottom: 5}}>
            {data.department} {data.year}
          </Text>
        </View>

        <Text style={{width: '90%', marginBottom: 20, color: 'grey'}}>
          Dashboard
        </Text>
        <View style={[styles.dashBoard]}>
          <View style={[styles.dashContainer]}>
            <View style={[styles.dashBoardCircle]}>
              <Text>{data.department}</Text>
            </View>
            <Text>Department</Text>
          </View>
          <View style={[styles.dashContainer]}>
            <View style={[styles.dashBoardCircle]}>
              <Text>{year}</Text>
            </View>
            <Text>{data.year}</Text>
          </View>
          <View style={[styles.dashContainer]}>
            <View style={[styles.dashBoardCircle]}>
              <Text>{schedule && schedule.length}</Text>
            </View>
            <Text>Classes</Text>
          </View>
          <View style={[styles.dashContainer]}>
            <View style={[styles.dashBoardCircle]}>
              <Text>{schedule && schedule.length * 3}</Text>
            </View>
            <Text>Credits</Text>
          </View>
        </View>

        <View style={[styles.dayCounter]}>
          {days.map((day, index) => (
            <View style={[styles.dayCounterBox]}>
              <Text style={{width: '33%', textAlign: 'center'}}>{day}</Text>
              <Text style={{width: '33%', textAlign: 'center'}}>
                {schedule.filter(d => d.day === day).length}
              </Text>
              <Text style={{width: '33%', textAlign: 'center'}}>Classes</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default Profile;
