import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BoldLabel, Label, PurpleLabel} from '../index';
import {moderateScale} from '../../assets/constants/scalling';

const HeadText2 = ({title, subTitle, subTitle2, subTitle3, subTitle4}) => {
  return (
    <View style={styles.container}>
      <PurpleLabel style={styles.title} label={title} />
      {/* <Label style={styles.subTitle} label={subTitle} /> */}
      <Text>
        <Label style={styles.subTitle} label={subTitle} />
        <PurpleLabel style={styles.subTitle2} label={subTitle2} />
        <Label style={styles.subTitle} label={subTitle3} />
        <BoldLabel style={styles.subTitle4} label={subTitle4} />
      </Text>
    </View>
  );
};

export default HeadText2;

const styles = StyleSheet.create({
  container: {width: '80%'},
  title: {fontSize: moderateScale(31), marginBottom: moderateScale(10)},
  subTitle: {fontSize: moderateScale(16)},
});
