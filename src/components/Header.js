import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header = () => (
    <View style = {headerContainer}>
        <Text style = {header}> Todo-List </Text>
    </View>
)

var styles = StyleSheet.create({
    headerContainer : {
        display : 'flex',
        marginTop : 30,
        alignItems : 'center'
    },
    header : {
        fontWeight : 'bold',
        fontSize : 20
    }
})

var {headerContainer , header} = styles;

export default Header;
