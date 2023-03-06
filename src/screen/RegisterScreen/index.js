import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {RegisterSchema} from '../../utils/validation';
import {showSuccess} from '../../utils/helpers';
import {styles} from './styles';
import {ContentText, SuccessMessage} from '../../utils/constant';
import {images} from '../../utils/images';
import auth from '@react-native-firebase/auth';
import SocialLogin from '../../components/SocialLogin';

export default function RegisterScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          mobile: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={value => {
          auth()
            .createUserWithEmailAndPassword(value.email, value.password)
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
            <View style={styles.viewStyle}>
              <Image style={styles.imageStyle} source={images.LOGO_IMAGE} />
              <View
                style={{
                  backgroundColor: 'white',
                  // height: Dimensions.get('window').height * 0.85,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  paddingTop: 10,
                  borderWidth: 2,
                  borderColor: '#f7c73a',
                  overflow: 'scroll',
                }}>
                {/* <Text style={styles.textStyle}>
                  {ContentText.REGISTER_TEXT}
                </Text> */}
                <CustomInput
                  placeholder={'Full Name'}
                  value={values.name}
                  heading={'Full Name'}
                  onChange={handleChange('name')}
                  error={touched.name && errors.name}
                />
                <CustomInput
                  placeholder={'Email'}
                  value={values.email}
                  heading={'Email'}
                  onChange={handleChange('email')}
                  error={touched.email && errors.email}
                />
                <CustomInput
                  placeholder={'Mobile Number'}
                  value={values.mobile}
                  heading={'Mobile Number'}
                  onChange={handleChange('mobile')}
                  error={touched.mobile && errors.mobile}
                />
                <CustomInput
                  placeholder={'Password'}
                  value={values.password}
                  heading={'Password'}
                  onChange={handleChange('password')}
                  error={touched.password && errors.password}
                />

                <CustomButton
                  title={ContentText.REGISTER_BUTTON_TEXT}
                  onPress={handleSubmit}
                />
                <SocialLogin />
                <Text
                  style={styles.bottomText}
                  onPress={() => navigation.navigate('LoginScreen')}>
                  {ContentText.ALREADY_HAVE_ACCOUNT}
                </Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}
