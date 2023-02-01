import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button, ErrorText, QuestionBtn, TextInput} from '../../index';
import {IconSVG} from '../../../assets/constants';
import {moderateScale} from '../../../assets/constants/scalling';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  name: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Please Enter Your Full Name'),
  password: Yup.string()
    .min(8, 'Minimum 8 Characters')
    .required('Password is Required'),
});

const RegisterForm = ({onSubmit, onLogin}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
      }}
      // onSubmit={value => Alert.alert(JSON.stringify(value))}
      onSubmit={value => {
        onSubmit();
        console.log('value =>', value);
      }}
      validationSchema={RegisterSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.formContainer}>
          <TextInput
            mode="outlined"
            placeholder="Masukkan Email"
            label="Email"
            left={() => <IconSVG.AtSvg />}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
          />
          {touched.email && errors.email && (
            <ErrorText errValue={errors.email} />
          )}
          <TextInput
            mode="outlined"
            placeholder="Masukkan Nama"
            label="Your Name"
            left={() => <IconSVG.AvatarSvg />}
            style={styles.txtInpt}
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
          />
          {touched.name && errors.name && <ErrorText errValue={errors.name} />}
          <TextInput
            mode="outlined"
            placeholder="Masukkan Password"
            label="Your Password"
            secureTextEntry={hidePassword}
            left={() => <IconSVG.LockSvg />}
            right={hidePassword ? 'eye' : 'eye-off'}
            icoPress={() => {
              setHidePassword(!hidePassword);
              return false;
            }}
            style={styles.txtInpt}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
          />
          {touched.password && errors.password && (
            <ErrorText errValue={errors.password} />
          )}
          <Button
            mode="contained"
            labelBtn="Register"
            style={styles.btn}
            onPress={handleSubmit}
            // onPress={() => {
            //   onSubmit();
            // }}
            disabled={!isValid}
          />
          <QuestionBtn
            label1="Already have an account?"
            label2="Login"
            style={styles.quest}
            onPress={() => {
              onLogin();
            }}
          />
        </View>
      )}
    </Formik>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  formContainer: {marginTop: moderateScale(40)},
  txtInpt: {marginTop: moderateScale(28)},
  btn: {marginTop: moderateScale(58)},
  quest: {marginTop: moderateScale(40), justifyContent: 'center'},
});
