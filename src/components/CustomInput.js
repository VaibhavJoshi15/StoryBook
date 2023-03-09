import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {dpi, myWidth} from '../utils/reponsiveUtils';
import colors from '../utils/theme/colors';
import fontList from '../utils/theme/fontList';

const CommonInput = ({value, placeholder, onChange, error, heading}) => {
  return (
    <View style={styles.viewStyle}>
      <Text
        style={{
          color: colors.Black,
          fontFamily: fontList.BOLD,
          marginTop: 4 * dpi,
        }}>
        {heading}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          if (onChange) {
            onChange(text);
          }
        }}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.PlaceHolderColor}
      />
      {error ? (
        <Text style={styles.errorStyle}>{error}</Text>
      ) : (
        <Text style={styles.errorStyle}>{''}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 18 * dpi,
    marginTop: 1 * dpi,
    color: colors.Black,
    fontFamily: fontList.SEMIBOLD,
    //borderWidth: 2,
    borderColor: colors.PrimaryColor,
    backgroundColor: colors.InputBackground,
    borderRadius: 3 * dpi,
    paddingHorizontal: 10,
    width: 0.9 * myWidth,
  },
  errorStyle: {
    color: colors.ErrorColor,
    fontSize: 4 * dpi,
  },
  viewStyle: {},
});

export default CommonInput;
