import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../utils/images';
import {dpi, myHeight, myWidth} from '../utils/reponsiveUtils';

const SocialLogin = () => {
  return (
    <View style={{}}>
      <Text style={{textAlign: 'center'}}>OR</Text>
      <View style={{flexDirection: 'row', marginVertical: 5 * dpi}}>
        <Image
          source={images.GOOGLE_LOGO}
          style={{height: myHeight * 0.041, width: myWidth * 0.065}}
        />
        <Image
          source={images.FACEBOOK_LOGO}
          style={{
            height: myHeight * 0.045,
            width: myWidth * 0.09,
            marginHorizontal: myWidth * 0.1,
          }}
        />
        <Image
          source={images.APPLE_LOGO}
          style={{height: myHeight * 0.045, width: myWidth * 0.09}}
        />
      </View>
    </View>
  );
};
export default SocialLogin;
