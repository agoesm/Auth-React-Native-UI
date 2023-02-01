import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button, ErrorText, TextInput} from '../../index';
import {IconSVG} from '../../../assets/constants';
import {moderateScale} from '../../../assets/constants/scalling';

const ForgotPassSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
});

const ForgotPassForm = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      // onSubmit={value => Alert.alert(JSON.stringify(value))}
      onSubmit={value => {
        onSubmit();
        console.log('value =>', value);
      }}
      validationSchema={ForgotPassSchema}>
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
          <Button
            mode="contained"
            labelBtn="Submit"
            style={styles.btn}
            onPress={handleSubmit}
            // onPress={() => {
            //   onSubmit();
            // }}
            disabled={!isValid}
          />
        </View>
      )}
    </Formik>
  );
};

export default ForgotPassForm;

const styles = StyleSheet.create({
  formContainer: {marginTop: moderateScale(40)},
  txtInpt: {marginTop: moderateScale(28)},
  btn: {marginTop: moderateScale(28)},
});
