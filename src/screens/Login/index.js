import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {
  AppBar,
  IconButton,
  HeadText2,
  LoginForm,
  MainContainer,
  QuestionBtn,
} from '../../components';
import {IconSVG} from '../../assets/constants';

const LoginScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <MainContainer>
      <AppBar
        onPress={() => {
          navigation.pop();
        }}
      />
      <View style={styles.bodyContainer}>
        <HeadText2
          title="Login"
          subTitle="Login now to track all your expenses and income at a place!"
        />
        <LoginForm
          onSubmit={() => {
            navigation.replace('Home');
          }}
          onForgetPass={() => {
            navigation.navigate('ForgotPassword');
          }}
        />
        <View style={[styles.line, {borderColor: theme.colors.text}]} />
        <IconButton
          labelBtn="Google"
          iconBtn={<IconSVG.GoogleSvg />}
          style={styles.btn1}
          onPress={() => {}}
        />
        <QuestionBtn
          label1="Don’t have an account?"
          label2="Register"
          style={styles.quest}
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
    </MainContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    margin: 20,
  },
  line: {
    borderWidth: 0.7,
    marginVertical: 30,
  },
  quest: {justifyContent: 'center', marginTop: 40},
});
