import React, { Component } from 'react'
import {
    View,
    Button,
    StyleSheet
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
          todoText:""
        };
        this.btnPress = this.btnPress.bind(this);
    }


    btnPress(){
        // console.log(this.state);
        // console.log("button pressed");
        if(this.state.todoText.trim().length > 0){
            this.props.addT(this.state.todoText);
            this.setState({todoText:""});
        }
    }

    render(){
        return(
            <View style = {container}>
                <SearchBar
                  noIcon
                  lightTheme
                  onChangeText={ (text) => this.setState({todoText : text}) }
                  placeholder = "Type here ..."
                  value = {this.state.todoText}
                />
                <Button
                    onPress = {this.btnPress}
                    title = 'Add ToDo'
                    color = '#841584'
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
});

var {container} = styles;

const mapDispatchToProps = dispatch => {
    return {
        addT : (todoText) => {
            dispatch(addTodo(todoText))
        },
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
