import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen/MainScreen';
import RootScreen from '../screens/RootScreen/RootScreen';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={RootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
