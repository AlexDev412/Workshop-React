import {Image, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DisplayImage = (props: any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        ImageStyle: {
            height: hp(props.ImageHeight),
            width: wp(props.ImageWidth),
            marginLeft: wp(props.MarginLeft),
            marginTop: hp(props.MarginTop),
        }
    });

    return (
        <View style={styles.container}>
            <Image style={styles.ImageStyle} source={props.PathImage}/>
        </View>
    );
}

export default DisplayImage;