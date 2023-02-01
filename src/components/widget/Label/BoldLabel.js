import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

const BoldLabel = ({label, style}) => {
  const theme = useTheme();

  return (
    <Text style={[{color: theme.colors.text}, styles.txt, style]}>{label}</Text>
  );
};

export default BoldLabel;

const styles = StyleSheet.create({
  txt: {
    fontWeight: '700',
  },
});
