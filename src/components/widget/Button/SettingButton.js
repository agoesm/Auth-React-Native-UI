import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Icons} from '../../../assets/constants';
import Label from '../Label/Label';

const SettingButton = ({children, label, icon, isActive, ...props}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[{backgroundColor: theme.colors.surface}, styles.container]}
      {...props}>
      <View style={styles.labelGroup}>
        <Icons.MaterialCommunityIcons
          name={icon}
          size={24}
          color={theme.colors.text}
          style={styles.icon}
        />
        <Label label={label} style={styles.txt} />
      </View>
      <Icons.MaterialCommunityIcons
        name={
          isActive ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'
        }
        size={24}
        color={theme.colors.text}
      />
      {children}
    </TouchableOpacity>
  );
};

export default SettingButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {fontStyle: 'italic'},
  icon: {marginRight: 15},
});
