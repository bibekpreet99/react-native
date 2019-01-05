import React,{ Component } from "React";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


export default class calculator extends Component{
    render(){
      let btn = [[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
      let rows = []
      for(let i=0 ; i<4; i++){
        let row = []
        for(let j=0; j<3; j++)
        row.push(<TouchableOpacity style= {styles.btn}><Text style={styles.btnText}>{btn[i][j]}</Text></TouchableOpacity>)
        rows.push(<View style={styles.row}>{row}</View>)
        console.log(rows)
      }

      let operations = ['CE','+','-','*','/']
      let ops = []
      for(let i=0; i<5; i++){
        ops.push(<TouchableOpacity style={styles.btn}><Text style={[styles.btnText, styles.white]}>{operations[i]}</Text></TouchableOpacity>)
      }
      
        return(
            <View style= {styles.container}>
                <View style = {styles.result}>
                  <Text style={styles.resultText}>11*11</Text>
                </View>
                <View style = {styles.calculation}>
                  <Text style={styles.calculationText}>121</Text>
                </View>
                <View style = {styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}                    
                    </View>
                    <View style = {styles.operation}>
                      {ops}
                    </View>
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
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation:{
        flex: 1,
        backgroundColor: 'darkgrey',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculationText:{
      fontSize: 30,
      color: 'white',
    },
    resultText:{
      fontSize: 24,
      color: 'white'
    },
    buttons:{
        flex: 7,
        flexDirection: 'row',
    },
    btnText:{
      fontSize:30,
    },
    numbers: {
      flex:3,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: "center",
      alignSelf : "stretch",
    },
    operation:{
      flex:1,
      backgroundColor: 'black'
    },
    btn:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    row:{
      flex:1,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    white:{
      color: 'white',
    }

})