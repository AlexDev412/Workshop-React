import React, { Component } from 'react';
import {SafeAreaView} from 'react-native';
import DisplayText from '../components/DisplayText'
import DisplayImage from '../components/DisplayImage';
import Button from '../components/Button';

class Screen extends Component  {
    constructor (props : any) {
        super (props)
    }
    render() {
        return (
            <SafeAreaView>
                <DisplayImage MarginLeft="3%" MarginTop="6%" ImageHeight="50%" ImageWidth="85%" PathImage={require("../../assets/woman.png")} />
                <DisplayText Text='Never more in rust' FontSize='7%' MarginLeft='5%' MarginRight='5%' MarginTop='60%' FontColor="black" TextLineHeight="7%"></DisplayText>
                <DisplayText Text='Check and keep under control your daily task, is a creative way' FontSize='2%' MarginLeft='5%' MarginRight='5%' MarginTop='2%' FontColor="grey" TextLineHeight="3%"></DisplayText>
                <Button MarginLeft="80%" MarginTop="1%" IconLabel="arrow-right" IconColor="#00c4c0" BackGroundColor="#e9f9f8" ButtonHeight="4%" ButtonWidth="8%" ButtonSize={24}/>
            </SafeAreaView>
        )
    }
}

export default Screen;

