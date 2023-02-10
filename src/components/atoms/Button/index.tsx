import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderHandlers,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/colors';
import {scale} from 'react-native-size-matters';

type IPros = {
  buttonText: string;
  onPress?: (e: GestureResponderEvent) => void;
};

const Button = ({buttonText, onPress}: IPros): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.btnText}>{buttonText}</Text>
    </TouchableOpacity>
  );
  //   return (
  //     <TouchableOpacity onPress={()} style={styles.IconOnlycontainer}>
  //       <Text style={styles.IconOnlybtnText}>+</Text>
  //     </TouchableOpacity>
  //   );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(12),
    borderRadius: scale(16),
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
  },
  IconOnlycontainer: {
    width: scale(44),
    height: scale(44),
    backgroundColor: colors.primary,
    paddingVertical: scale(12),
    borderRadius: scale(16),
  },
  IconOnlybtnText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center',
  },
});
