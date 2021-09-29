import React from 'react';
import Login from './src/screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Feed from './src/screens/Feed';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>

  );
}

function App() {
  return (

    <NavigationContainer>

      <MyStack />

    </NavigationContainer>

  );
}

export default App;

