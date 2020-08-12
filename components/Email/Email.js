import React from 'react';
import AppCamera from "../Camera/AppCamera";
import {Dimensions, Text, View} from "react-native";
import Slider from '../Slider';

const {width, height} = Dimensions.get('window')
export default class EMAIL extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        };

    }
    render() {
        return (
            <AppCamera 
                blinkAction={() => {console.log('both')}}
                rightAction={() => {console.log('right')}}
                leftAction={() => {console.log('left')}}
            >
                <View style={{width: width, height: height, justifyContent: 'center', display: 'flex'}}>
                    <Slider />
                </View>
            </AppCamera>
        )
    }
} 
