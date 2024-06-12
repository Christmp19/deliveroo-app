import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './nativewind.config';
import CustomText from './components/text';

export default function App() {
  return (
    <View className="flex-1 items-center bg-green-600 justify-center">
      <Text className="text-red-500">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <CustomText />
    </View>
  );
}