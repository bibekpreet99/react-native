import React,{ Component } from "React";
import { View, StyleSheet, Text } from 'react-native'


export default class calculator extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <View style = {styles.result}></View>
                <View style = {styles.calculation}></View>
                <View style = {styles.buttons}>
                    <View style={styles.numbers}></View>
                    <View style = {styles.operation}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
    },
    result:{
        flex: 2,
        backgroundColor: 'slategrey',
        
    },
    calculation:{
        flex: 1,
        backgroundColor: 'darkgrey',
    },
    buttons:{
        flex: 7,
        flexDirection: 'row',
    },
    numbers: {
      flex:3,
      backgroundColor: 'white'
    },
    operation:{
      flex:1,
      backgroundColor: 'black'
    }


})