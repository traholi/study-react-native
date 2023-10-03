import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';
import './src/i18n/configs';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
        <Button>
          <Text style={{ fontSize: 32, color: 'white' }}>Home</Text>
          <Icon name='home' size={50} color={'white'} />
        </Button>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
