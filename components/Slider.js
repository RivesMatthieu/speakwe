import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button, Alert } from 'react-native';

const {width, height} = Dimensions.get('window')

export default class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLetter: 'e',
            currentIndex: 1,
            currentWord: ''
        }
        this.alphabet = [...'esarintulomdpcfbvhjqzyxkw'];
    }

    componentDidMount() {
        this.renderLetter()
    }
 
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderLetter = () => {
        this.interval = setInterval(() => {
                this.setState({currentLetter: this.alphabet[this.state.currentIndex], 
                    currentIndex: this.state.currentIndex === this.alphabet.length ? 0 : this.state.currentIndex + 1})
            }, 1000)
    }
    renderLetters = () => (this.alphabet.map(letter => (
            <Text style={
                this.alphabet[this.state.currentIndex] === letter ? 
                {textAlign: 'center',color: 'white', fontSize: 30, fontWeight: 'bold'}
                :
                {textAlign: 'center',color: 'rgba(255, 255, 255, .5)', fontSize: 20}
            }>{letter}</Text> 
        )))
    
    renderWord = (currentLetter) => {
        let currentWord = this.state.currentWord
        currentWord += currentLetter
        this.setState({currentWord})
        this.setState({ currentIndex: 0 })
        console.log(currentWord)
    }

    cleanWord = () => {
        this.setState({currentWord : this.state.currentWord = ''})
    }

    render () {
        return (
            <View 
            style={Style.container}
            >
                <Button
                    title='Clear screen'
                    color='black'
                    onPress={() => this.cleanWord(this.state.currentWord)}
                />
                <Text 
                    style={{color: 'white', fontSize: 200, fontWeight: 'bold'}}
                    onPress={() => this.renderWord(this.state.currentLetter)}
                >
                    {this.state.currentLetter}
                </Text>
                <Text
                    style={{color: 'white', fontSize: 60}}
                >
                    {this.state.currentWord}
                </Text>
            </View>
        );
    }
}

const Style = StyleSheet.create ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: '#309383',
    },

});