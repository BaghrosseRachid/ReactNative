
import React from 'react';
import Header from './components/header';
import {View,Text} from 'react-native';
import  {Button} from 'react-native-elements';

export default class App extends React.Component {
constructor(props){
  super(props);
  this.state={mytext:"toufik baghrosse"}
}
  onPressFunction=()=> {
this.setState({mytext: "rachidbaghrosse"})  }
   render(){
  return (

    <View>
    <Header content='liste des tâches'/>
    <Button
     large 
    iconleft
    icon={{name:'code'}}
    title = "rachid baghrosse"
    onPress={this.onPressFunction}
    ></Button>
    <Text> {this.state.mytext}</Text>
    </View>

  );

  }
}
