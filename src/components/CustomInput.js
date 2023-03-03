import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {dpi, myWidth} from '../utils/reponsiveUtils';
import colors from '../utils/theme/colors';

const CommonInput = ({value, placeholder, onChange, error}) => {
  return (
    <View style={styles.viewStyle}>
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
      {error && <Text style={styles.errorStyle}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 18 * dpi,
    marginTop: 10 * dpi,
    borderWidth: 1,
    borderColor: colors.PrimaryColor,
    backgroundColor: colors.InputBackground,
    borderRadius: 5 * dpi,
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
