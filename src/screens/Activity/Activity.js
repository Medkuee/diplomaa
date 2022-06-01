import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';

//styles
import styles from './styles';
import ArrowSvg from '../../assets/icons/ArrowSvg';

// store
import AppButton from '../../components/local/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../../components/local/CustomTextInput';
import Search1Svg from '../../assets/icons/Search1Svg';

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

function Activity({navigation, route}) {
  const {loginToken} = route.params;

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [weekDay, setWeekDay] = useState('Monday');

  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
  });

  useEffect(() => {
    fetchSchedule();
    fetchProfile();
  }, []);

  const fetchSchedule = () => {
    api
      .get('posts', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then(res => {
        console.log('Schedule', res.data);
        setData(res.data.data);
        setFilteredData(res.data.data.filter(d => d.day === weekDay));
        return res.data;
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
        setYear(res.data.year);
        setDepartment(res.data.department);
        setName(res.data.name);
        return res.data;
      });
  };

  const navigateSchedule = () => {
    navigation.navigate('Schedule', {
      loginToken: loginToken,
    });
  };

  const navigateProfile = () => {
    navigation.push('Profile', {
      loginToken: loginToken,
    });
  };

  useEffect(() => {
    setFilteredData(data.filter(d => d.day === weekDay));
  }, [weekDay]);

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>Welcome, {name}</Text>
        </View>
        <View style={[styles.headerNameContainer]}>
          <Text style={[styles.headerName]}>
            {year} {department}
          </Text>
          <TouchableOpacity
            style={[styles.profileIcon]}
            onPress={navigateProfile}>
            <Image
              style={[styles.closeBack]}
              source={require('../../assets/images/profileIcon.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.bodyContainer]}>
          <Text style={{fontSize: 20, fontWeight: '600', marginVertical: 10}}>
            Schedule
          </Text>
          <View style={[styles.dayCounter]}>
            {days.map((day, index) => (
              <TouchableOpacity
                style={[
                  styles.dayCounterBox,
                  {backgroundColor: weekDay === day ? '#59425B' : 'white'},
                ]}
                onPress={() => setWeekDay(day)}>
                <Text style={{color: weekDay === day ? 'white' : 'black'}}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              width: '90%',
              marginVertical: 20,
            }}>
            Periods
          </Text>
          <ScrollView style={[styles.scrollView]}>
            <View style={[styles.scrollViewContainer]}>
              {periods.map((period, index) => (
                <View
                  style={{
                    width: '90%',
                    height: 80,
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{period}</Text>
                  {filteredData.filter(d => d.period === period).length > 0 &&
                    filteredData
                      .filter(d => d.period === period)
                      .map(d => (
                        <View
                          style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: '#59425B',
                            borderRadius: 5,
                            padding: 20,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: '500',
                              marginBottom: 10,
                            }}>
                            {d.course_name}
                          </Text>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 14,
                              alignSelf: 'flex-end',
                            }}>
                            Prof:{d.course_professor}
                          </Text>
                        </View>
                      ))}
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={[styles.bottom]}>
            <Pressable style={[styles.bottomContainer]}>
              <Text style={[styles.bottomContainerText]}>Activity</Text>
            </Pressable>
            <Pressable
              style={[styles.bottomContainer, {backgroundColor: 'white'}]}
              onPress={navigateSchedule}>
              <Text style={[styles.bottomContainerText, {color: 'black'}]}>
                Schedule
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Activity;
