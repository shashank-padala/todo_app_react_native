import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { CheckBox } from 'react-native-elements'

const Todo = (text,completed) => {
    console.log("inside Todo Component");
    console.log(text);
    console.log(completed);
    return (
        <View>
            <CheckBox
                title = {text}
                checked = {completed}
                checkedColor = 'green'
            />
        </View>
    )
}

export default Todo;
