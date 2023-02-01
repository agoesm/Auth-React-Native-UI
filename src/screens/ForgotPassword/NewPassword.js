import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppBar, HeadText2, MainContainer, NewPassForm} from '../../components';

const NewPassword = ({navigation}) => {
  return (
    <MainContainer>
      <AppBar
        onPress={() => {
          navigation.pop();
        }}
      />
      <View style={styles.bodyContainer}>
        <HeadText2
          title="Forgot Password?"
          subTitle="Set your new password to login into your account!"
        />
        <NewPassForm
          onSubmit={() => {
            navigation.replace('WelcomeScreen');
          }}
        />
      </View>
    </MainContainer>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  bodyContainer: {flex: 1, margin: 20},
});
