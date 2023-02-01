import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button, ErrorText, TextInput} from '../../index';
import {IconSVG} from '../../../assets/constants';
import {moderateScale} from '../../../assets/constants/scalling';

const NewPassSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Minimum 8 Characters')
    .required('Password is Required'),
});

const NewPassForm = ({onSubmit}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Formik
      initialValues={{
        password: '',
      }}
      onSubmit={value => {
        onSubmit();
        console.log('value =>', value);
      }}
      validationSchema={NewPassSchema}>
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

export default NewPassForm;

const styles = StyleSheet.create({
  formContainer: {marginTop: moderateScale(40)},
  txtInpt: {marginTop: moderateScale(28)},
  btn: {marginTop: moderateScale(28)},
});
