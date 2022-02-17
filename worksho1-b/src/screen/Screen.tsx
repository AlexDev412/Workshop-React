import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';

import DisplayImage from '../components/Image';
import DisplayText from '../components/DisplayText';

class Screen extends Component {
    constructor (props : any) {
        super(props)
    }

    render () {
        return (
            <SafeAreaView style={this.styles.ScreenStyle}>
            <View style={this.styles.HeaderStyle}>
                <DisplayImage MarginLeft="75%" MarginTop="6%" ImageHeight="8%" ImageWidth="16%" PathImage={require("../../assets/profile_pic.png")} />
                <DisplayText Text='My tasks' FontSize='5%' MarginLeft='0%' MarginRight='50%' MarginTop='14%' FontColor="black" TextLineHeight="17%"></DisplayText>
            </View>
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
