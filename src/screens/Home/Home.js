import React, {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';

//styles
import styles from './styles';

import AppButton from '../../components/local/AppButton';

const departments = [
  'IM',
  'HTM',
  'CS',
  'IR',
  'MC',
  'BT',
  'EE',
  'FD',
  'ME',
  'ET',
];

const years = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

function Home({navigation}) {
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);

  const chooseDepartment = data => {
    setDepartment(data);
  };
  const chooseYear = data => {
    setYear(data);
  };

  useEffect(() => {
    if (department && year) {
      navigation.navigate('Schedule', {
        department: department,
        year: year,
      });
    }
  }, [year]);

  console.log('ez', department, year);

  return (
    <View style={[styles.container]}>
      {!department ? (
        <>
          <Text style={[styles.homeHeader]}>Choose your department</Text>

          <View style={[styles.mainContent]}>
            {departments.map((elements, index) => (
              <AppButton
                onPress={() => chooseDepartment(elements)}
                style={[styles.appButton]}
                text={elements}
                key={`department${index}`}
              />
            ))}
          </View>
        </>
      ) : (
        <>
          <Text style={[styles.homeHeader]}>Choose your year</Text>

          <View style={[styles.mainContent]}>
            {years.map((elements, index) => (
              <AppButton
                onPress={() => chooseYear(elements)}
                style={[styles.appButton]}
                text={elements}
                key={`year${index}`}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
}

export default Home;
