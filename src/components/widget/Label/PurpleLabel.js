import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

const PurpleLabel = ({label, style}) => {
  const theme = useTheme();

  return (
    <Text style={[{color: theme.colors.primary}, styles.txt, style]}>
      {label}
    </Text>
  );
};

export default PurpleLabel;

const styles = StyleSheet.create({
  txt: {
    fontWeight: '700',
  },
});
