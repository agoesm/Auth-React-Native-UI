import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  IconButton,
  HeadText,
  Label,
  MainContainer,
  QuestionBtn,
} from '../../components';
import {IconSVG} from '../../assets/constants';

const WelcomeScreen = ({navigation}) => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <HeadText
          title="Auth UI"
          subTitle="Welcome to"
          subTitle2="A place where you can track all your expenses and incomes..."
        />
        <Label label="Let’s Get Started..." style={styles.txt1} />
        <IconButton
          labelBtn="Google"
          iconBtn={<IconSVG.GoogleSvg />}
          style={styles.btn1}
          onPress={() => {}}
        />
        <IconButton
          labelBtn="Email"
          iconBtn={<IconSVG.AtSvg />}
          style={styles.btn2}
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
        <QuestionBtn
          label1="Already have an account?"
          label2="Login"
          style={styles.quest}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </MainContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  txt1: {fontSize: 17, marginTop: 55, marginBottom: 18},
  btn1: {marginBottom: 10},
  btn2: {marginBottom: 24},
  quest: {justifyContent: 'center'},
});
