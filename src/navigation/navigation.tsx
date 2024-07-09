import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
