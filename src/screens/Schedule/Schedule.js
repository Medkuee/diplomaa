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

function Schedule({navigation, route}) {
  const {loginToken} = route.params;

  const [data, setData] = useState([]);
  const [classes, setClasses] = useState(['Example Class', 'Example Class']);
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');

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
        console.log('res', res.data);
        setData(res.data.data);
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
        console.log('profileData', res.data);
        setYear(res.data.year);
        setDepartment(res.data.department);
        return res.data;
      });
  };

  const handleDelete = id => {
    api
      .delete(`posts/${id}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        fetchSchedule();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const navigateActivity = () => {
    navigation.navigate('Activity', {
      loginToken: loginToken,
    });
  };
  const navigateAddSchedule = () => {
    navigation.navigate('AddSchedule', {
      loginToken: loginToken,
    });
  };
  const navigateProfile = () => {
    navigation.push('Profile', {
      loginToken: loginToken,
    });
  };

  console.log('loginToken', loginToken);

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>Available Courses</Text>
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
          <ScrollView style={[styles.scrollView]}>
            <View style={[styles.scrollViewContainer]}>
              {data.length > 0
                ? data.map((classy, index) => (
                    <AppButton
                      key={`button${index}`}
                      style={[
                        styles.appButton,
                        {backgroundColor: classy.color},
                      ]}
                      onLongPress={() => handleDelete(classy.id)}
                      textStyle={{color: 'white'}}
                      text={classy.course_name}
                      background={{
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                      }}>
                      <View>
                        <Text>{classy.day}</Text>
                        <Text>{classy.period}</Text>
                      </View>
                    </AppButton>
                  ))
                : classes.map((classy, index) => (
                    <AppButton
                      key={`button${index}`}
                      style={[styles.appButton]}
                      textStyle={{color: 'black'}}
                      text={classy}
                      background={{
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                      }}>
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

        <TouchableOpacity
          style={[styles.addImageContainer]}
          onPress={navigateAddSchedule}>
          <Image
            style={[styles.addImage]}
            source={require('../../assets/images/add2.jpeg')}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Schedule;
