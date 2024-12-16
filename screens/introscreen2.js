import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const introscreen2 = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('introscreen3');
  };

  return (
    <View>
      <Text>Here is some information about the app.</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default introscreen2;
