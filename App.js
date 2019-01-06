import React,{ Component } from "React";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'


export default class calculator extends Component{
  constructor(){
    super()
    this.state = {
      resultText: '',
      calculateText: ''
    }
    this.operations = ['<=','+','-','*','/','CE']
  }

  calculateResult(){
    let text = this.state.resultText
    const lastChar = text.split('').pop()
    if(lastChar != '+' && lastChar != '/' && lastChar != '*' && lastChar != '-')
    this.setState({
      calculateText: eval(text)
    })
    else{
      Alert.alert("Format is wrong")
    }
  }

  operate(operation){
    switch (operation) {
      case "<=":
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break;
      case 'CE':
        this.setState({
          resultText: '',
          calculateText:''
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(lastChar)>0) return

        if(this.state.resultText == "")return
        this.setState({
          resultText: this.state.resultText + operation
        })

      
    }
  }


  buttonPressed(text){
    if(text == '='){
      this.calculateResult()
      
    }
    else{
    this.setState({
      resultText: this.state.resultText + text
    })
  }
  }



    render(){
      let btn = [[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
      let rows = []
      for(let i=0 ; i<4; i++){
        let row = []
        for(let j=0; j<3; j++)
        row.push(<TouchableOpacity key={btn[i][j]} style= {styles.btn} onPress = {()=>{ this.buttonPressed(btn[i][j])}}>
        <Text style={styles.btnText}>{btn[i][j]}</Text></TouchableOpacity>)
        rows.push(<View key={i} style={styles.row}>{row}</View>)
      }

      
      let ops = []
      for(let i=0; i<6; i++){
        ops.push(<TouchableOpacity key= {this.operations[i]}style={styles.btn} onPress={()=>this.operate(this.operations[i])}>
        <Text style={[styles.btnText, styles.white]}>{this.operations[i]}</Text>
        </TouchableOpacity>)
      }
      
        return(
            <View style= {styles.container}>
                <View style = {styles.result}>
                  <Text style={styles.resultText}>{this.state.resultText}</Text>
                </View>
                <View style = {styles.calculation}>
                  <Text style={styles.calculationText}>{this.state.calculateText}</Text>
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