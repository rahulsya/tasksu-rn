import {Text, SafeAreaView, Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Illus1, Illus2, Illus3} from '../../assets/images';
import {styles} from '../../styles/onboarding.styles';
import {ForwardLight} from '../../assets/icons';

import {RootStackParamList} from '../../ultility/navigationTypes';
import {Button} from '../../components';

type NavProp = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
type IProps = {
  navigation: NavProp['navigation'];
  route: NavProp['route'];
};

const steps = [
  {
    imageCover: Illus1,
    title: 'Lorem ipsum is simply dummy text ?',
    desc: 'Welcome !!! Do you want to clear task super fast with Mane?',
    lastStep: false,
  },
  {
    imageCover: Illus2,
    title: 'Lorem ipsum is simply dummy text ?',
    desc: 'Easily arrange work order for you to mange. Many functions to choose.',
    lastStep: false,
  },
  {
    imageCover: Illus3,
    title: 'Lorem ipsum is simply dummy text ?',
    desc: 'It has been easier to complete tasks. Get started with us!',
    lastStep: true,
  },
];

const Onboarding = ({navigation, route}: IProps) => {
  const [step, setStep] = useState(1);

  const onNextStep = () => {
    if (step >= steps.length - 1) return;
    setStep(prevState => prevState + 1);
  };

  const onLogin = () => {
    navigation.navigate('Login');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Image source={steps[step].imageCover} />
          <View style={styles.textWrapper}>
            <Text style={styles.titleText}>{steps[step].title}</Text>
            <Text style={styles.descText}>{steps[step].desc}</Text>
          </View>
        </View>

        {steps[step].lastStep && (
          <View style={styles.lastStepContainer}>
            <Button buttonText="Get Started" onPress={onSignIn} />
            <View style={styles.signinContainer}>
              <Text style={styles.signinText}>Already have an account ?</Text>
              <TouchableOpacity onPress={() => onLogin()}>
                <Text style={styles.signinTextBtn}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {!steps[step].lastStep && (
          <TouchableOpacity
            onPress={() => onNextStep()}
            style={styles.skipContainer}>
            <Button
              onPress={onNextStep}
              buttonText=""
              iconOnly={true}
              iconComponent={<ForwardLight />}
            />
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
