import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../styles/colors';
import Logo from '../assets/images/logo.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../ultility/navigationTypes';

type IProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Spash = ({navigation}: IProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Example');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} />
    </SafeAreaView>
  );
};

export default Spash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
