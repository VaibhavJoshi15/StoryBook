import {StyleSheet} from 'react-native';
import {dpi, myHeight, myWidth} from '../../utils/reponsiveUtils';
import colors from '../../utils/theme/colors';
import fontList from '../../utils/theme/fontList';

export const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: myWidth / 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: myHeight * 0.15,
    width: myWidth * 0.3,
    marginTop: myHeight * 0.05,
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
  bottomText: {
    fontFamily: fontList.EXTRABOLD,
    color: colors.Black,
    fontSize: 15,
  },
  container: {flex: 1},
});
