import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {InputText, Gap, Button} from '../components';
import TitleHeader from '../components/molecules/Title';
import {Backward, Dashboard, Right, User} from '../assets/icons';
import {scale} from 'react-native-size-matters';

const Experiment = (): JSX.Element => {
  const [formData, setformData] = useState({
    name: '',
    password: '',
  });

  return (
    <SafeAreaView style={{flex: 1, margin: scale(15)}}>
      <ScrollView>
        <Gap height={20} />
        <Text>Tasksu app</Text>
        <Gap height={20} />
        <InputText icon={<User />} placeholder="Name" />
        <Gap height={20} />
        <InputText placeholder="Password" isPassword={true} />
        <Gap height={20} />
        <Button buttonText="Button" />
        <Gap height={20} />
        <TitleHeader leftIcon={<Backward />} title="Dashboard" />
        <Gap height={20} />
        <TitleHeader rightIcon={<Right />} title="Project" />
        <Gap height={20} />
        <TitleHeader
          rightIcon={<Right />}
          title="Dashboard "
          titleRightIcon={<Dashboard />}
        />
        <Gap height={20} />
        <TitleHeader
          rightIcon={<Right />}
          title=" Tile"
          titleLeftIcon={<Dashboard />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Experiment;
