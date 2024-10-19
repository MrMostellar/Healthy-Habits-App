import { Text, View, ScrollView, ScrollViewComponent, Pressable } from 'react-native';
import { ExpoRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth, { getAuth } from '@react-native-firebase/auth';
import Renderer from '../../../components/Renderer';


export default function App() {
  /*test variable to see if the logic is working for firebase
  const user = auth().currentUser.email
  */
  return (
    <SafeAreaView>
        <ScrollView>
          <View className="flex-row justify-around flex-wrap">
            <Renderer/>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}