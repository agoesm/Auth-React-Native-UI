import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput as TxtInptPaper, useTheme} from 'react-native-paper';
import {moderateScale} from '../../../assets/constants/scalling';
import Label from '../Label/Label';

const TextInput = props => {
  const {label, left, right, icoPress, style, styleCore, ...rest} = props;
  const theme = useTheme();

  return (
    <View style={style}>
      <Label label={label} style={styles.lbl} />
      <TxtInptPaper
        placeholderTextColor={theme.colors.placeholder}
        textColor={theme.colors.text}
        autoCapitalize={false}
        theme={{roundness: 15}}
        left={left && <TxtInptPaper.Icon icon={left} />}
        right={right && <TxtInptPaper.Icon icon={right} onPress={icoPress} />}
        style={[
          {backgroundColor: theme.colors.background},
          styles.txtInpt,
          styleCore,
        ]}
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  lbl: {fontSize: moderateScale(16)},
  txtInpt: {padding: moderateScale(5)},
});
