import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import colors from '../../utils/theme/colors';
import fontList from '../../utils/theme/fontList';
import {dpi, myHeight, myWidth} from '../../utils/reponsiveUtils';
import * as ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

export default function HomeScreen({navigation}) {
  const {userInfo} = useSelector(state => state.auth);
  const [modalVisible, setModalVisible] = useState(false);

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        // presentationStyle: 'fullScreen',
        //type: [DocumentPicker.types.pdf, DocumentPicker.types.doc],
        // allowMultiSelection:true
      });

      // const fileName = doc.uri.replace('file://', '');
      // console.log(fileName);
      console.log(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the upload', err);
      } else console.log(err);
    }
  };

  const onButtonPress = type => {
    if (type === 'Camera') {
      let options = {
        mediaType: type,
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      };
      ImagePicker.launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    } else {
      let options = {
        mediaType: type,
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      };
      ImagePicker.launchImageLibrary(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const ImageAdd = () => {
    return (
      <View
        style={{
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f7c73a',
                  height: myHeight * 0.08,
                  width: myWidth * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: dpi * 5,
                  marginBottom: dpi * 10,
                }}
                onPress={() => {
                  () => onButtonPress('Gallery');
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    color: colors.Black,
                  }}>
                  Gallery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f7c73a',
                  height: myHeight * 0.08,
                  width: myWidth * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: dpi * 5,
                  marginBottom: dpi * 10,
                }}
                onPress={() => onButtonPress('Camera')}>
                <Text
                  style={{
                    color: colors.Black,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: dpi * 5,
                  // marginBottom: dpi * 10,
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: colors.Black,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      console.log('user----->', userInfo);
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => selectDoc()}>
        <Text
          style={{
            color: colors.PrimaryColor,
            fontFamily: fontList.BOLD,
            fontSize: dpi * 9,
          }}>
          Add Document to StoryBook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text
          style={{
            color: colors.PrimaryColor,
            fontFamily: fontList.BOLD,
            fontSize: dpi * 9,
            marginVertical: myHeight * 0.05,
          }}>
          Add An image
        </Text>
      </TouchableOpacity>
      {ImageAdd()}
    </View>
  );
}
