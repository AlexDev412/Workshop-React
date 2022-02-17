import { StyleSheet, View, Text } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DisplayText = (props: any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
          },
          textWrapper: {
            marginLeft: wp(props.MarginLeft),
            marginTop: hp(props.MarginTop),
            marginRight: wp(props.MarginRight)
          },
          myText: {
            fontSize: hp(props.FontSize),
            color: props.FontColor,
            lineHeight: hp(props.TextLineHeight)
          }
    })
    return (
        <View style={styles.textWrapper}>
            <Text style={styles.myText}>{props.Text}</Text>
        </View>
    );
}

export default DisplayText