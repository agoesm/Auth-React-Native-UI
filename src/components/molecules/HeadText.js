import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Label, PurpleLabel} from '../index';
import {moderateScale} from '../../assets/constants/scalling';

const HeadText = ({title, subTitle, subTitle2}) => {
  return (
    <View style={styles.container}>
      <Label style={styles.subTitle1} label={subTitle} />
      <PurpleLabel style={styles.title} label={title} />
      <Label style={styles.subTitle2} label={subTitle2} />
    </View>
  );
};

export default HeadText;

const styles = StyleSheet.create({
  container: {width: '90%'},
  title: {fontSize: moderateScale(40), marginBottom: moderateScale(6)},
  subTitle1: {fontSize: moderateScale(24)},
  subTitle2: {fontSize: moderateScale(16)},
});
