import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

function AppButton({
  children,
  style,
  textStyle,
  background,
  onPress,
  text = '',
  onLongPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={[styles.linear, background]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <View>{children}</View>
      </View>
    </TouchableOpacity>
  );
}

export default AppButton;
