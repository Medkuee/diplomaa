import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

//styles
import styles from './styles';

import ArrowSvg from '../../assets/icons/ArrowSvg';

import AppButton from '../../components/local/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../../components/local/CustomTextInput';
import ProfileInput from '../../components/local/ProfileInput';
import Search1Svg from '../../assets/icons/Search1Svg';

import axios from 'axios';

function ProfileDetail({navigation, route}) {
  const {department, year, loginToken} = route.params;
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
  });

  const navigateSchedule = () => {
    const data = {
      name: name,
      department: department,
      year: year,
      gender: gender,
      last_name: lastName,
      phone_number: phoneNumber,
    };
    if (name && department && year && gender && lastName && phoneNumber) {
      api
        .put(`custom_users/update`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${loginToken}`,
          },
        })
        .then(function (response) {
          navigation.navigate('Schedule', {
            loginToken: loginToken,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('Empty field');
    }
  };

  const chooseGender = g => {
    setGender(g);
  };

  return (
    // <SafeAreaView>
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <Text style={[styles.headerText]}>Profile Detail</Text>
      </View>

      <View style={[styles.headerNameContainer]}>
        <Text style={[styles.headerName]}>
          {department} {year}
        </Text>
      </View>

      <View style={[styles.imageContainer]}>
        <TouchableOpacity
          style={[
            styles.imageBox,
            {backgroundColor: gender === 'female' ? 'grey' : 'white'},
          ]}
          onPress={() => chooseGender('female')}>
          <Image
            style={[styles.image]}
            source={require('../../assets/images/femaleProfile.jpeg')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.imageBox,
            {backgroundColor: gender === 'male' ? 'grey' : 'white'},
          ]}
          onPress={() => chooseGender('male')}>
          <Image
            style={[styles.image, {marginBottom: 10}]}
            source={require('../../assets/images/maleProfile.jpeg')}
          />
        </TouchableOpacity>
      </View>

      <ProfileInput
        value={name}
        onChangeText={setName}
        title="Name"></ProfileInput>
      <ProfileInput
        value={lastName}
        onChangeText={setLastName}
        title="Last name"></ProfileInput>
      <ProfileInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        title="Phone number"></ProfileInput>
      <AppButton
        text="Submit"
        style={[styles.appButton]}
        textStyle={{fontSize: 20}}
        onPress={navigateSchedule}></AppButton>
    </View>
    // </SafeAreaView>
  );
}

export default ProfileDetail;
