import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from './src/components/card';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <Text style={styles.text1}>My task</Text>
        <Text style={styles.text2}>You have 4 tasks today.</Text>
      </View>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    marginVertical: 50,
    fontWeight: 'bold'
  },
  text1: {
    color: 'white',
    fontSize: 30,
    width: '90%',
    marginVertical: 20,
    fontWeight: '500'
  },
  text2: {
    color: 'white',
    fontSize: 20,
    width: '90%',
    fontWeight: '500'
  },
});