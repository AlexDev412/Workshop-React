import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DisplayImage from '../components/Image';
import DisplayText from '../components/DisplayText';
import DisplayButton from '../components/DisplayButton';
import DisplayCard from '../components/DisplayCard';

class Screen extends Component {
    constructor (props : any) {
        super(props)
    }

    data = [{ id : '0', CardTitle: "DESIGN", CardSubTitle: "Create a new landing page Hero image", CardText: "Design team is involved to create a new hero image for the landing page, this should be 1440x900px. It needs to be peacefull and light.", NumberComment: "3 comments" },
            { id: '1', CardTitle: "ORGANISATION", CardSubTitle: "New tasks", CardText: "You mus provide a new way of oraganisation", NumberComment: "7 comments"}]

    render () {
        return (
            <SafeAreaView style={this.styles.ScreenStyle}>
            <View style={this.styles.HeaderStyle}>
                <DisplayText Text='My tasks' FontSize='5%' MarginLeft='5%' MarginRight='5%' MarginTop='7%' FontColor="white" TextLineHeight="7%"></DisplayText>
                <DisplayImage MarginLeft="30%" MarginTop="6%" ImageHeight="6%" ImageWidth="13%" PathImage={require("../../assets/profile_pic.png")} />
            </View>
            <DisplayText Text='You have 4 tasks today' FontSize='2%' MarginLeft='5%' MarginRight='5%' MarginTop='1%' FontColor="white" TextLineHeight="2%"></DisplayText>
            <FlatList
                    style={{height: hp('50%')}}
                    horizontal={true}
                    data={this.data}
                    keyExtractor={item => item.id}
                     renderItem={({ item }) => 
                        <DisplayCard CardTitle={item.CardTitle} CardSubTitle={item.CardSubTitle} CardText={item.CardText} NumberComment={item.NumberComment}></DisplayCard>
                    }
                />
                <DisplayButton MarginLeft="40%" MarginTop="15%" IconLabel="plus" IconColor="#00c4c0" BackGroundColor="#e9f9f8" ButtonHeight="10%" ButtonWidth="21%" ButtonSize={50} />
            </SafeAreaView>
        );
    }
    styles = StyleSheet.create({
        ScreenStyle : {
            flex: 1,
            backgroundColor: '#00c4c0',
            flexDirection: "column"
        },
        HeaderStyle : {
            flexDirection: 'row'
        }
    });
}

export default Screen
