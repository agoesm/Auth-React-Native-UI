import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  AppBar,
  HeadText2,
  MainContainer,
  VerificationForm,
} from '../../components';

const ForgotVerfication = ({navigation}) => {
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
          subTitle="We have sent an email to your email account with a verification code!"
        />
        <VerificationForm
          onSubmit={() => {
            navigation.navigate('NewPassword');
          }}
        />
      </View>
    </MainContainer>
  );
};

export default ForgotVerfication;

const styles = StyleSheet.create({
  bodyContainer: {flex: 1, margin: 20},
});
