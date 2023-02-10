import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

type IProps = {
  leftIcon?: JSX.Element;
  title: string;
  titleLeftIcon?: JSX.Element;
  titleRightIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const TitleHeader = ({
  leftIcon,
  title,
  rightIcon,
  titleLeftIcon,
  titleRightIcon,
}: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {leftIcon && <TouchableOpacity>{leftIcon}</TouchableOpacity>}
      <View style={styles.titleWrapper}>
        {titleLeftIcon}
        <Text style={styles.fontTitle}>{title}</Text>
        {titleRightIcon}
      </View>
      {rightIcon ? <TouchableOpacity>{rightIcon}</TouchableOpacity> : <View />}
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  fontTitle: {
    fontSize: scale(18),
    fontWeight: '700',
  },
  titleWrapper: {
    flexDirection: 'row',
  },
});
