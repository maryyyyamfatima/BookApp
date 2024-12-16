import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const introscreen1 = ({ navigation }) => {
  const handleNext = async () => {
    await AsyncStorage.setItem('hasSeenIntro', 'true');
    navigation.navigate('introscreen2');
  };

  return (
    <View>
      <Text>Welcome to the App!</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default introscreen1;
