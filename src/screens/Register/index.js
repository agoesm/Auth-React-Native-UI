import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppBar, HeadText2, MainContainer, RegisterForm} from '../../components';

const RegisterScreen = ({navigation}) => {
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
          // subTitle="Create an account to access all the features of APP Template!"
          subTitle="Create an "
          subTitle2="account "
          subTitle3="to access all the features of "
          subTitle4="APP Template!"
        />
        <RegisterForm
          onSubmit={() => {
            navigation.navigate('RegisterVerfication');
          }}
          onLogin={() => {
            navigation.replace('Login');
          }}
        />
      </View>
    </MainContainer>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    margin: 20,
  },
});
