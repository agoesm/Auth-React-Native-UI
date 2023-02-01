import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Button, ErrorText, Label, QuestionBtn, TextInput} from '../../index';
import {IconSVG} from '../../../assets/constants';
import {moderateScale} from '../../../assets/constants/scalling';
import {Checkbox} from 'react-native-paper';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(6, 'Minimum 6 Characters')
    .required('Password is Required'),
});

const LoginForm = ({onSubmit, onForgetPass, setData}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [initialValues, setInitialValues] = useState({email: '', password: ''});

  useEffect(() => {
    console.log('valuesTask ==>', initialValues);
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      onSubmit();
      // setData(values);
      setInitialValues({email: values.email, password: values.password});
      console.log('valueLogin =>', values);
    },
    validationSchema: LoginSchema,
  });

  return (
    <View style={styles.formContainer}>
      <TextInput
        mode="outlined"
        placeholder="Masukkan Email"
        label="Email"
        left={() => <IconSVG.AtSvg />}
        value={formik.values.email || initialValues.email}
        onChangeText={formik.handleChange('email')}
        onBlur={() => formik.setFieldTouched('email')}
      />
      {formik.touched.email && formik.errors.email && (
        <ErrorText errValue={formik.errors.email} />
      )}
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
        value={formik.values.password || initialValues.password}
        onChangeText={formik.handleChange('password')}
        onBlur={() => formik.setFieldTouched('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <ErrorText errValue={formik.errors.password} />
      )}
      <View style={styles.RFP}>
        <View style={styles.RM}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Label label="Remember Me" style={styles.RMlbl} />
        </View>
        <QuestionBtn
          label2="Forgot Password?"
          lblStyl2={styles.lbl}
          onPress={() => {
            onForgetPass();
          }}
        />
      </View>
      <Button
        mode="contained"
        labelBtn="Login"
        style={styles.btn}
        onPress={formik.handleSubmit}
        // onPress={() => {
        //   onSubmit();
        // }}
        disabled={!formik.isValid}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formContainer: {marginTop: moderateScale(40)},
  txtInpt: {marginTop: moderateScale(28)},
  btn: {marginTop: moderateScale(20)},
  lbl: {fontWeight: '400'},
  RM: {flexDirection: 'row', alignItems: 'center'},
  RMlbl: {fontSize: moderateScale(16)},
  RFP: {
    marginTop: moderateScale(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
