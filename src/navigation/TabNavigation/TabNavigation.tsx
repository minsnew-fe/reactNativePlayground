import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DailyScreen from '../../screens/DailyScreen/DailyScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Daily" component={DailyScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
