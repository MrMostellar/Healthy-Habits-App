import { Text, View, ScrollView, ScrollViewComponent, Pressable, Image } from 'react-native';
import { ExpoRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Asset } from 'expo-asset';
import Renderer from '../../../components/Renderer';
import Logo from '../../../components/Logo';


export default function App() {
  /*test variable to see if the logic is working for firebase
  const user = auth().currentUser.email
  */
  return (
    <SafeAreaView className="flex-1 bg-brandBackground">
        <ScrollView>
          <View className="flex-row justify-around flex-wrap">
            <Renderer/>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}