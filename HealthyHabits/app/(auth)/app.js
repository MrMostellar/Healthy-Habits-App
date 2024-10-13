import { Text, View, ScrollView, ScrollViewComponent } from 'react-native';
import { ExpoRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FullWindowOverlay } from 'react-native-screens';


export default function App() {
  return (
    <SafeAreaView>
        <ScrollView>
          <View>
              <Text>Home Page</Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}