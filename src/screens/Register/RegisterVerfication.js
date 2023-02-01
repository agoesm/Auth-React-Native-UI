import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  AppBar,
  HeadText2,
  MainContainer,
  VerificationForm,
} from '../../components';

const RegisterVerfication = ({navigation}) => {
  return (
    <MainContainer>
      <AppBar
        onPress={() => {
          navigation.pop();
        }}
      />
      <View style={styles.bodyContainer}>
        <HeadText2
          title="Register"
          subTitle="We have sent an email to your email account with a verification code!"
        />
        <VerificationForm
          onSubmit={() => {
            navigation.replace('WelcomeScreen');
          }}
        />
      </View>
    </MainContainer>
  );
};

export default RegisterVerfication;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    margin: 20,
  },
});
