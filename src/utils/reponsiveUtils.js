import {Dimensions, PixelRatio} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const dpi = PixelRatio.get();

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
const isLandscape = () => {
  const dim = Dimensions.get('window');
  return dim.width >= dim.height;
};

const isLandScapeFlag = isLandscape();

export const myWidth = Dimensions.get('window').width;
export const myHeight = Dimensions.get('window').height;

const relativeWidth = ratio => (isLandScapeFlag ? hp(ratio) : wp(ratio));

const relativeHeight = ratio => (isLandScapeFlag ? wp(ratio) : hp(ratio));

const relativeFontSize = fontSize => {
  const fontSizeDpi = fontSize / dpi;
  return PixelRatio.getPixelSizeForLayoutSize(fontSizeDpi);
};

export default {
  relativeWidth,
  relativeHeight,
  relativeFontSize,
  isLandscape,
  isPortrait,
  isLandScapeFlag,
};
