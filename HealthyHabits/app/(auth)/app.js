import { Text, View, ScrollView, ScrollViewComponent, Pressable } from 'react-native';
import { ExpoRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth, { getAuth } from '@react-native-firebase/auth';


export default function App() {
  /*test variable to see if the logic is working for firebase
  const user = auth().currentUser.email
  */
  return (
    <SafeAreaView>
        <ScrollView>
          <View className="items-center">
              {/*test to see if the logic is working for firebase
              <Pressable 
                className="bg-black"
                onPress={() => {alert(user)}}
              >
              <Text> </Text>
              </Pressable>
              */}
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}