import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SMS from './components/SMS/SMS'
import Email from './components/Email/Email'
import Navigator from "./components/Navigator";

const MainNavigator = createStackNavigator({
    Main: {
        screen: Navigator,
        navigationOptions: {
            header: null
        }
    },
    SMS: {
        screen: SMS,
        navigationOptions: {
            header: null
        }
    },
    EMAIL: {
        screen: Email,
        navigationOptions: {
            header: null
        }
    },

});

const App = createAppContainer(MainNavigator);

export default App;
