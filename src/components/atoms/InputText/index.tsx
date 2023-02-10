import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';

import {colors} from '../../../styles/colors';
import {User} from '../../../assets/icons';

type IProps = {
  onChangeText?: (value: string) => void;
  placeholder: string;
  value: string;
  isPassword?: boolean | false;
  keyboardType?: KeyboardTypeOptions | undefined;
  icon?: JSX.Element;
};

const InputText = ({
  onChangeText,
  placeholder,
  value,
  isPassword,
  keyboardType,
  icon,
}: IProps): JSX.Element => {
  const [isFocus, setFocus] = useState(false);

  return (
    <View
      style={[
        styles.container,
        isFocus ? styles.activeBorder : styles.normalBorder,
      ]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
        style={styles.textInputContainer}
        onFocus={e => setFocus(true)}
        onBlur={() => setFocus(false)}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: scale(16),
    backgroundColor: colors.white,
    fontSize: scale(16),
    paddingHorizontal: scale(24),
    paddingVertical: scale(12),
  },
  normalBorder: {
    borderWidth: 1,
    borderColor: colors.netralSemiLight,
  },
  activeBorder: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textInputContainer: {
    fontSize: scale(14),
    flex: 1,
  },
  icon: {
    paddingRight: scale(16),
  },
});
