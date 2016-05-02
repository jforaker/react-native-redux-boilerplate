import React, {
    Component,
    PropTypes,
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableHighlight,
    AlertIOS
} from 'react-native';


import CustomScreen from './Screen'

class Counter extends Component {

    render() {
        var { increment, decrement, counter, navigator } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Clicked: {counter} times</Text>
                <TouchableHighlight onPress={increment}>
                    <Text style={styles.text}>+</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={decrement}>
                    <Text style={styles.text}>-</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigator.push({component: CustomScreen})}>
                    <Text style={styles.text}>Increment async</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Counter;