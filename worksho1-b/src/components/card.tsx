import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const Card = () => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>Design</Text>
            <Text>Creat a new landing page hero image</Text>
            <View style={styles.ViewBox}>
            <View style={[styles.box, { backgroundColor: "powderblue" }]}>
                <Text>#Design</Text>
            </View>
            <View style={[styles.box, { backgroundColor: "red" }]}>
                <Text>#Design</Text>
            </View>
            <View style={[styles.box, { backgroundColor: "yellow" }]}>
                <Text>#Design</Text>
            </View>
            </View>
            <View style={styles.text}>
                <Text>Hello world Hello world Hello world Hello world Hello world Hello world 
                    Hello world Hello world Hello world </Text>
            </View>
            <View style={styles.comment}></View>
            <Text>3 comments</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    item: {
        // display: '',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: 'white',
        marginVertical: 100,
        // height: 300,
        // width: 500
  },
  title: {
    fontSize: 20,
    width: '90%',
    marginVertical: 20,
    fontWeight: '500'
  },
  box: {
    width: 60,
    height: 30,
    borderRadius: 8,
    margin: 5
  },
  ViewBox : {
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
  },
  comment: {
    alignItems: 'flex-start',
    margin: 10,
  }
});