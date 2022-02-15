import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import woman from './assets/woman.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={woman}/>
      <View style={styles.title}>
          <Text style={styles.textTitle}>Never more in rush</Text>
          <Text style={styles.text}>Check and keep under control your daily task, is a creative way</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
      <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />
  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    // alignItems: 'center',
      display: 'flex',
      width: '80%', 
      alignItems: 'center', 
      flexDirection: 'column', 
      justifyContent: 'space-between' 
    },
  textTitle : {
    fontSize: 30,
    color: 'grey'
  },
  text: {
    color: 'grey'
  },
  btn : {
    borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       position: 'absolute',
       bottom: 10,
       right: 10,
       height:70,
       backgroundColor:'#fff',
       borderRadius:100,
  },
});
