import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button as BtnPaper} from 'react-native-paper';
import {moderateScale} from '../../../assets/constants/scalling';

const ButtonRP = ({style, labelBtn, ...rest}) => {
  return (
    <BtnPaper
      style={[styles.btn, style]}
      contentStyle={styles.contentBtn}
      {...rest}>
      <Text style={styles.txt}>{labelBtn}</Text>
    </BtnPaper>
  );
};

export default ButtonRP;

const styles = StyleSheet.create({
  btn: {borderRadius: 15},
  contentBtn: {padding: moderateScale(8)},
  txt: {fontWeight: '700', fontSize: moderateScale(18), letterSpacing: 1},
});
