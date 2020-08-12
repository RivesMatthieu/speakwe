import React from 'react';
import SMS from "./SMS/SMS";
import EMAIL from "./Email/Email";
import {TabView, TabBar} from "react-native-tab-view"
import { Ionicons } from '@expo/vector-icons'
import  {Dimensions } from 'react-native'


export default class Navigator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 1,
            routes: [
                { key: 'first', icon: 'md-text'},
                { key: 'second', icon: 'md-mail'},
            ],
        }

    }

    renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'first':
                return <SMS jumpTo={jumpTo}/>;
            case 'second':
                return <EMAIL jumpTo={jumpTo}/>;
            default:
                return null;
        }
    }
    renderTabBar = (props) => {
        return (
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'transparent' }}
                style={{ backgroundColor: 'transparent', paddingBottom: 24 }}
                renderIcon={({ route, focused }) => (
                    <Ionicons
                        name={route.icon}
                        color={focused ? 'black' : 'rgba(0, 0, 0, .2)'}
                        size={50}
                    />
                )}
            />
        )
    }
    render() {
        return (
            <TabView
                tabBarPosition={'bottom'}
                navigationState={this.state}
                renderScene={this.renderScene}
                renderTabBar={this.renderTabBar}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        )
    }
}
