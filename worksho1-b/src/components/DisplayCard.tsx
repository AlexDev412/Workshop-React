import {StyleSheet, Text, View} from 'react-native';
import { Card } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DisplayButton from './DisplayButton';

const DisplayCard = (props: any) => {
    const styles = StyleSheet.create({
        CardStyle: {
            height: hp('40%'),
            width: wp("75%"),
            marginTop: hp('7%'),
            borderRadius: hp("3%"),
        },
        CardTitleStyle: {
              height: hp('5%'),
            fontSize: hp('3%'),
            fontWeight: "bold",
              color: '#00c4c0',
        },
        CardSubTitleStyle: {
              height: hp('7%'),
              fontSize: hp('2.5%'),
              color: 'black',
        },
        CardTextStyle: {
              height: hp('17%'),
              marginTop: hp('1%'),
              fontSize: hp('2%'),
              color: 'grey',
        },
      CardCommentStyle: {
            marginTop: hp('1%'),
            fontSize: hp('2.5%'),
              color: '#00c4c0',
        },
          AllTagsStyle: {
              flexDirection: 'row',
      },
      FooterStyle: {
              flexDirection: 'row',
        }
    });
    return (
      <Card containerStyle={styles.CardStyle} >
            <Text style={styles.CardTitleStyle}>
                {props.CardTitle}
            </Text>
            <Text style={styles.CardSubTitleStyle}>
                {props.CardSubTitle}
            </Text>
            {/* <DisplayTag></DisplayTag> */}
            <Text style={styles.CardTextStyle}>
                {props.CardText}
            </Text>
            <View style= {styles.FooterStyle}>
              <Text style={styles.CardCommentStyle}>
                  {props.NumberComment}
              </Text>
        <DisplayButton MarginLeft="28%" MarginTop="0.2%" IconLabel="arrow-right" IconColor="#00c4c0" BackGroundColor="#e9f9f8" ButtonHeight="4%" ButtonWidth="8%" ButtonSize={24} />
            </View>
        </Card>
    );
}

export default DisplayCard;