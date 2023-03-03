import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {myHeight, myWidth, dpi} from '../utils/reponsiveUtils';
import colors from '../utils/theme/colors';

const CustomButton = ({title, onPress}) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 0.07 * myHeight,
    width: 0.9 * myWidth,
    backgroundColor: colors.PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0.1 * myWidth,
    marginVertical: 0.05 * myHeight,
    borderColor: colors.White,
    borderWidth: 1,
  },
  textStyle: {
    fontWeight: '800',
    color: colors.White,
    fontSize: 6 * dpi,
  },
  viewStyle: {alignItems: 'center'},
});
export default CustomButton;
