import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Label, PurpleLabel} from '../index';
import {moderateScale} from '../../assets/constants/scalling';

const QuestionBtn = ({style, label1, label2, lblStyl1, lblStyl2, onPress}) => {
  return (
    <View style={[styles.container, style]}>
      <Label label={label1} style={[styles.label1, lblStyl1]} />
      <TouchableOpacity onPress={onPress}>
        <PurpleLabel label={label2} style={[styles.label2, lblStyl2]} />
      </TouchableOpacity>
    </View>
  );
};

export default QuestionBtn;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  label1: {fontSize: moderateScale(16), marginRight: moderateScale(6)},
  label2: {fontSize: moderateScale(16), textDecorationLine: 'underline'},
});
