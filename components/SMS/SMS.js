import React from 'react';
import AppCamera from "../Camera/AppCamera";
import {Text, Dimensions, View} from "react-native";



const {width, height} = Dimensions.get('window')
export default class SMS extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
      return (
          <AppCamera
          blinkAction={() => {console.log('both')}}
          rightAction={() => {console.log('right')}}
          leftAction={() => {console.log('left')}}
          >
          </AppCamera>
      )
    }
}
