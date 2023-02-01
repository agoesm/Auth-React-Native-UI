import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  AppBar,
  ForgotPassForm,
  HeadText2,
  MainContainer,
} from '../../components';

const ForgotPassword = ({navigation}) => {
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
          subTitle="Recover you password if you have forgot the password!"
        />
        <ForgotPassForm
          onSubmit={() => {
            navigation.navigate('ForgotVerfication');
          }}
        />
      </View>
    </MainContainer>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  bodyContainer: {flex: 1, margin: 20},
});
