import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {LoginSchema} from '../../utils/validation';
import {showError, showSuccess} from '../../utils/helpers';
import {styles} from './styles';
import {ContentText, ErrorMessage, SuccessMessage} from '../../utils/constant';
import {images} from '../../utils/images';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={value => {
          auth()
            .signInWithEmailAndPassword(value.email, value.password)
            .then(() => {
              console.log('User account created & signed in!');
              navigation.navigate('UserStack');
              showSuccess(SuccessMessage.LOGGEDIN_SUCCESSFULLY);
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                showError(ErrorMessage.USER_ALREADY_EXIST);
              }
            });
        }}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <>
            <View style={styles.innerView}>
              <Image style={styles.imageStyle} source={images.LOGO_IMAGE} />
              <Text style={styles.textStyle}>{ContentText.LOGIN_TEXT}</Text>
              <CustomInput
                placeholder={'Email'}
                value={values.email}
                onChange={handleChange('email')}
                error={touched.email && errors.email}
              />
              <CustomInput
                placeholder={'Password'}
                value={values.password}
                onChange={handleChange('password')}
                error={touched.password && errors.password}
              />
              <CustomButton
                title={ContentText.LOGIN_BUTTON_TEXT}
                onPress={handleSubmit}
              />
              <Text
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('RegisterScreen')}>
                {ContentText.DONT_HAVE_ACCOUNT}
              </Text>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
