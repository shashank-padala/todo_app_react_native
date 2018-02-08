import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button
} from 'react-native'
import Todo from './Todo.js'
import {connect} from 'react-redux'
import { CheckBox } from 'react-native-elements'
import { toggleTodo, deleteTodo } from '../actions'

const TodoList = ({todos,toggle,deleteTo}) => {
    // console.log("inside TodoList");
    // console.log(todos.length);
    // console.log(toggle);
    // if(todos.length>0) {
    //     console.log(todos[0].completed);
    // }

    return(
        <View>
            <FlatList
                style = {styles.list}
                data={todos}
                keyExtractor={(item,index) => item.id}
                renderItem={({item,index}) =>
                    <View style = {styles.listItemCont} >
                        <CheckBox
                            style = {styles.listItem}
                            title = {item.text}
                            checked = {item.completed}
                            onIconPress = { () => toggle(item.id) }
                            checkedColor = 'green'
                        />
                        <Button
                            onPress = { () => deleteTo(index) }
                            title = "X"
                        />
                        <View style = {styles.hr} />
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: "100%"
    },
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
    },
    listItemCont: {
        flex: 1,
        flexDirection: "row",
    },
    hr: {
    height: 1,
    backgroundColor: "gray"
  },
})

const mapStateToProps = state => {
    return {
        todos : state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle : (id) => {
            dispatch(toggleTodo(id))
        },
        deleteTo : (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
