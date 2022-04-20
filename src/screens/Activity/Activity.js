import React, {useEffect, useState, useContext} from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';

//styles
import styles from './styles';

import ArrowSvg from '../../assets/icons/ArrowSvg';

import AppButton from '../../components/local/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../../components/local/CustomTextInput';
import Search1Svg from '../../assets/icons/Search1Svg';

function Activity({navigation, route}) {
  const {data, department, year} = route.params;

  console.log(data);

  const navigateSchedule = () => {
    navigation.goBack();
  };

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
            {data.map((classy, index) => (
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
    </SafeAreaView>
  );
}

export default Activity;
