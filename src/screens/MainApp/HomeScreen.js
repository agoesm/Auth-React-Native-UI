import React from 'react';
import {StyleSheet} from 'react-native';
import {BoldLabel, MainContainer} from '../../components';

const HomeScreen = () => {
  return (
    <MainContainer style={styles.content}>
      <BoldLabel label="Home Screen" />
    </MainContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
