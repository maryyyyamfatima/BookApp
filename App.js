import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

import { BookDetail } from "./screens/";
import Tabs from "./navigation/tabs";
import introscreen1 from './screens/introscreen1'; // Add your Introductory screens
import introscreen2 from './screens/introscreen1';
import introscreen3 from './screens/introscreen3';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    });

    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('hasSeenIntro');
                if (value === null) {
                    setIsFirstLaunch(true);
                } else {
                    setIsFirstLaunch(false);
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkFirstLaunch();
    }, []);

    if (!loaded || isFirstLaunch === null) {
        return null;  // Show loading screen until fonts are loaded and check is completed
    }

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={isFirstLaunch ? 'introscreen1' : 'Home'}
            >
                {/* Introductory Screens */}
                <Stack.Screen name="introscreen1" component={introscreen1} />
                <Stack.Screen name="introscreen2" component={introscreen2} />
                <Stack.Screen name="introscreen3" component={introscreen3} />

                {/* Main Screens */}
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="BookDetail" component={BookDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
