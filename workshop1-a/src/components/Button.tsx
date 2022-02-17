import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, TouchableHighlight, View} from 'react-native';
import { IconButton } from 'react-native-paper'

const Button = (props: any) => {
    const styles = StyleSheet.create({
        ButtonStyles: {
            height: hp(props.ButtonHeight),
            width: wp(props.ButtonWidth),
            marginLeft: wp(props.MarginLeft),
            marginTop: hp(props.MarginTop),
            backgroundColor: props.BackGroundColor,
        },
    })
    
    return (
        <IconButton
            size={props.ButtonSize}
                style={styles.ButtonStyles}
            icon={props.IconLabel}
            color={props.IconColor}
            />
    );
}

export default Button