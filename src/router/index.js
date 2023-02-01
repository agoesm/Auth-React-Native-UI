import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  RegisterVerfication,
  ForgotPassword,
  ForgotVerfication,
  NewPassword,
  HomeScreen,
} from '../screens';
import {Colors} from '../assets/constants';
import {defaultTheme} from '../assets/theme';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <PaperProvider theme={defaultTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            headerTitleStyle: {color: 'white', fontSize: 22},
            headerStyle: {backgroundColor: Colors.primary},
          }}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterVerfication"
            component={RegisterVerfication}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotVerfication"
            component={ForgotVerfication}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPassword"
            component={NewPassword}
            headerMode="screen"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            headerMode="screen"
            options={{headerTitle: 'Home'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routers;
