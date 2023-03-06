import {StyleSheet} from 'react-native';
import {dpi, myHeight, myWidth} from '../../utils/reponsiveUtils';
import colors from '../../utils/theme/colors';
import fontList from '../../utils/theme/fontList';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PrimaryColor,
  },
  innerView: {
    // marginHorizontal: myWidth / 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: myHeight * 0.2,
    width: myWidth * 0.5,
    marginVertical: myHeight * 0.125,
  },
  textStyle: {
    color: colors.PrimaryColor,
    fontWeight: '900',
    fontSize: dpi * 10,
    fontFamily: fontList.EXTRABOLD,
    textDecorationLine: 'underline',
    textDecorationColor: colors.Blue,
    textShadowColor: colors.LightGray,
  },
  buttonStyle: {
    fontFamily: fontList.EXTRABOLD,
    color: colors.Black,
    fontSize: 15,
  },
});
