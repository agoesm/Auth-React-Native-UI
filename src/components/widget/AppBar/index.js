import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';

const AppBar = ({onPress, title, mode}) => {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={
        mode === 'primary'
          ? [styles.mode1, {backgroundColor: theme.colors.primary}]
          : [styles.mode2, {backgroundColor: theme.colors.background}]
      }>
      {onPress && (
        <Appbar.BackAction onPress={onPress} color={theme.colors.text} />
      )}
      <Appbar.Content
        title={title}
        titleStyle={[styles.titleHead, {color: theme.colors.accent}]}
      />
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  mode1: {height: 48},
  mode2: {height: 48},
  titleHead: {
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});
