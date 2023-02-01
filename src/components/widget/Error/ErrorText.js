import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {moderateScale} from '../../../assets/constants/scalling';

const ErrorText = ({errValue}) => {
  const theme = useTheme();

  return (
    <Text style={[styles.txt, {color: theme.colors.error}]}>{errValue}</Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  txt: {
    fontSize: moderateScale(15),
    marginLeft: moderateScale(5),
    marginTop: moderateScale(5),
  },
});
