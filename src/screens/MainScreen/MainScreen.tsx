import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, SafeAreaView, Text} from 'react-native';
import {RootStackParamList} from '../../navigation/navigation';

const MainScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView>
      <Text>Main Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')} title="Move" />
    </SafeAreaView>
  );
};

export default MainScreen;
