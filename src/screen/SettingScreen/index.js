import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {userData} from '../../redux/reducers/authSlice';

export default function SettingScreen({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Logout"
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              navigation.navigate('AuthStack');
              dispatch(userData({token: null}));
            });
        }}
      />
    </View>
  );
}
