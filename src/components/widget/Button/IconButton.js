import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {moderateScale} from '../../../assets/constants/scalling';
import BoldLabel from '../Label/BoldLabel';

const IconButton = ({labelBtn, iconBtn, onPress, style}) => {
  const theme = useTheme();
  return (
    <TouchableHighlight
      style={[{borderColor: theme.colors.text}, styles.btn, style]}
      underlayColor={theme.colors.surface}
      onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.ico}>{iconBtn}</View>
        <BoldLabel style={styles.txt} label={'Continue with ' + labelBtn} />
      </View>
    </TouchableHighlight>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btn: {
    padding: moderateScale(16),
    borderWidth: 1.5,
    borderRadius: 16,
  },
  ico: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {fontSize: moderateScale(16)},
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
