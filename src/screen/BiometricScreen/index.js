import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import colors from '../../utils/theme/colors';
import fontList from '../../utils/theme/fontList';

export default function BiometricScreen({navigation}) {
  const [authState, setAuthState] = useState('');
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
          authenticateWithBiometrics();
        } else {
          if (!available) {
            navigation.navigate('UserStack');
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const authenticateWithBiometrics = () => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          console.log('successful biometrics provided');
          navigation.navigate('UserStack');
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.PrimaryColor,
      }}>
      <Text style={{color: colors.White, fontFamily: fontList.BOLD}}>
        Authenticate to keep using the application
      </Text>
    </View>
  );
}
