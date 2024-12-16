import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const introscreen3 = () => {
  const navigation = useNavigation();

  const handleFinish = () => {
    navigation.navigate('Home');  // Navigate to the main/home screen after intro
  };

  return (
    <View>
      <Text>Get ready to start using the app!</Text>
      <Button title="Finish" onPress={handleFinish} />
    </View>
  );
};

export default introscreen3;
