import {
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {LoginSchema} from '../../utils/validation';
import {showError, showSuccess} from '../../utils/helpers';
import {styles} from './styles';
import {ContentText, ErrorMessage, SuccessMessage} from '../../utils/constant';
import {images} from '../../utils/images';
import {userData} from '../../redux/reducers/authSlice';
import auth from '@react-native-firebase/auth';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import firestore from '@react-native-firebase/firestore';
import SocialLogin from '../../components/SocialLogin';
import {useDispatch, useSelector} from 'react-redux';

export default function LoginScreen({navigation}) {
  const [authState, setAuthState] = useState('');
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.auth);
  console.log('user-------------', userInfo);

  useEffect(() => {
    const rnBiometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });
    rnBiometrics
      .isSensorAvailable()
      .then(result => {
        const {available, biometryType} = result;
        if (available && biometryType) {
          setAuthState(biometryType);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const rnBiometrics = new ReactNativeBiometrics({
  //   allowDeviceCredentials: true,
  // });

  // const BioAuth = rnBiometrics.isSensorAvailable().then(resultObject => {
  //   const {available, biometryType} = resultObject;

  //   if (
  //     available &&
  //     biometryType &&
  //     (Platform.OS == 'ios') === BiometryTypes.TouchID
  //   ) {
  //     console.log('TouchID is supported');
  //   } else if (
  //     available &&
  //     biometryType &&
  //     (Platform.OS == 'ios') === BiometryTypes.FaceID
  //   ) {
  //     console.log('FaceID is supported');
  //   } else if (available && biometryType === BiometryTypes.Biometrics) {
  //     console.log('Biometrics is supported');
  //   } else {
  //     console.log('Biometrics not supported');
  //   }
  // });

  // const KeyStatus = rnBiometrics.biometricKeysExist().then(resultObject => {
  //   const {keysExist} = resultObject;

  //   if (keysExist) {
  //     console.log('Keys exist');
  //   } else {
  //     console.log('Keys do not exist or were deleted');
  //   }
  // });

  // const AuthStatus = rnBiometrics
  //   .simplePrompt({promptMessage: 'Confirm fingerprint'})
  //   .then(resultObject => {
  //     const {success} = resultObject;

  //     if (success) {
  //       console.log('successful biometrics provided');
  //     } else {
  //       console.log('user cancelled biometric prompt');
  //     }
  //   })
  //   .catch(() => {
  //     console.log('biometrics failed');
  //   });

  const authenticateWithBiometrics = () => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          console.log('successful biometrics provided');
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
    // ReactNativeBiometrics.authenticate({
    //   description: 'Authenticate with biometrics',
    //   fallbackLabel: 'Enter PIN',
    //   cancelButtonTitle: 'Cancel',
    // })
    //   .then(result => {
    //     const {success, biometryType} = result;
    //     //const {success} = result;
    //     if (success) {
    //       console.log(`Authenticated with ${biometryType}`);
    //       // console.log(`Authenticated`);
    //     } else {
    //       console.log('Authentication failed');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  // console.log('AUTH', BioAuth);
  // console.log('AuthStatus', AuthStatus);
  // console.log('KeyStatus', KeyStatus);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={value => {
          auth()
            .signInWithEmailAndPassword(value.email, value.password)
            .then(async response => {
              // console.log('Res', response.user);
              // console.log('UserInfo', response?.user?._user);

              const userId = auth().currentUser.uid;
              console.log('USERID', userId);
              const userCred = {
                token: userId,
                email: value.email,
              };
              dispatch(userData(userCred));
              console.log('USERCRED', userCred);

              await firestore().collection('user').doc(userId).set({
                UserInfo: response?.user?._user,
              });
              navigation.navigate('UserStack');
              showSuccess(SuccessMessage.LOGGEDIN_SUCCESSFULLY);
            })
            .catch(error => {
              console.log('error', error);
              if (error.code === 'auth/email-already-in-use') {
                showError(ErrorMessage.USER_ALREADY_EXIST);
              }
            });
        }}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <>
            <View style={styles.innerView}>
              <Image style={styles.imageStyle} source={images.LOGO_IMAGE} />
              <View
                style={{
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height * 0.55,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderWidth: 2,
                  borderColor: '#f7c73a',
                }}>
                {/* <Text style={styles.textStyle}>{ContentText.LOGIN_TEXT}</Text> */}
                <CustomInput
                  placeholder={'Email'}
                  value={values.email}
                  onChange={handleChange('email')}
                  heading={'Email'}
                  error={touched.email && errors.email}
                />
                <CustomInput
                  placeholder={'Password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  heading={'Password'}
                  error={touched.password && errors.password}
                />
                <CustomButton
                  title={ContentText.LOGIN_BUTTON_TEXT}
                  onPress={handleSubmit}
                />
                {/* <Button
                  title="Fingerprint"
                  onPress={authenticateWithBiometrics}
                /> */}
                <SocialLogin />
                <Text
                  style={styles.buttonStyle}
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  {ContentText.DONT_HAVE_ACCOUNT}
                </Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}
