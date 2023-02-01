import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button, ErrorText, TextInput} from '../../index';
import {moderateScale} from '../../../assets/constants/scalling';

const VerificationSchema = Yup.object().shape({
  verification: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Please Enter Your Full Name'),
});

const VerificationForm = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{
        verification: '',
      }}
      // onSubmit={value => Alert.alert(JSON.stringify(value))}
      onSubmit={value => {
        onSubmit();
        console.log('value =>', value);
      }}
      validationSchema={VerificationSchema}>
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
            placeholder="Masukan Code Verification"
            label="Verification Code"
            style={styles.txtInpt}
            styleCore={styles.styleCore}
            value={values.verification}
            onChangeText={handleChange('verification')}
            onBlur={() => setFieldTouched('verification')}
          />
          {touched.verification && errors.verification && (
            <ErrorText errValue={errors.verification} />
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

export default VerificationForm;

const styles = StyleSheet.create({
  formContainer: {marginTop: moderateScale(40)},
  txtInpt: {marginTop: moderateScale(28)},
  styleCore: {textAlign: 'center'},
  btn: {marginTop: moderateScale(28)},
});
